import { useState, useEffect } from 'react'
import { Mail, MailOpen, Send, Check, Clock, User, Calendar } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../utils/axios'

const Admin = () => {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [replyForm, setReplyForm] = useState({
    to: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await api.get('/api/admin/messages')
      console.log('Admin messages response:', response.data) // Debug log
      setMessages(response.data.messages || [])
      setLoading(false)
    } catch (error) {
      console.error('Admin messages error:', error) // Debug log
      toast.error('Failed to fetch messages')
      setLoading(false)
    }
  }

  const updateMessageStatus = async (messageId, status) => {
    try {
      console.log(`Updating message ${messageId} to status: ${status}`) // Debug log
      await api.put(`/api/contact/${messageId}/status`, { status })
      
      // Update local state
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, status } : msg
        )
      )
      
      toast.success(`Message marked as ${status}`)
    } catch (error) {
      console.error('Update status error:', error) // Debug log
      toast.error('Failed to update status')
    }
  }

  const handleReply = (message) => {
    setSelectedMessage(message)
    setReplyForm({
      to: message.email,
      subject: `Re: ${message.subject}`,
      message: ''
    })
  }

  const sendReply = async (e) => {
    e.preventDefault()
    
    if (!replyForm.message.trim()) {
      toast.error('Please enter a reply message')
      return
    }
    
    try {
      console.log('Sending reply:', { 
        to: replyForm.to, 
        subject: replyForm.subject, 
        message: replyForm.message, 
        messageId: selectedMessage.id 
      })
      
      // Send reply via admin endpoint
      const response = await api.post('/api/admin/reply', {
        to: replyForm.to,
        subject: replyForm.subject,
        message: replyForm.message,
        messageId: selectedMessage.id
      })
      
      console.log('Reply response:', response.data)
      
      if (response.data.success) {
        toast.success(response.data.emailSent ? 'Reply sent successfully!' : 'Message marked as replied (email not configured)')
        
        // Update local message status
        setMessages(prev => 
          prev.map(msg => 
            msg.id === selectedMessage.id ? { ...msg, status: 'replied' } : msg
          )
        )
        
        // Clear form and close
        setSelectedMessage(null)
        setReplyForm({ to: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send reply')
      }
    } catch (error) {
      console.error('Send reply error:', error)
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Failed to send reply - please try again')
      }
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread':
        return <Mail className="text-gray-500" size={16} />
      case 'read':
        return <MailOpen className="text-blue-500" size={16} />
      case 'replied':
        return <Send className="text-green-500" size={16} />
      default:
        return <Clock className="text-gray-400" size={16} />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread':
        return 'bg-gray-100 text-gray-800'
      case 'read':
        return 'bg-blue-100 text-blue-800'
      case 'replied':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Message Admin</h1>
          <p className="text-gray-600">Manage your portfolio contact messages</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Messages ({messages.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Mail size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id ? 'bg-primary-50' : ''
                      }`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {getStatusIcon(message.status)}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                              {message.status}
                            </span>
                            <span className="ml-auto text-sm text-gray-500">
                              {new Date(message.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{message.subject}</h3>
                          <p className="text-sm text-gray-600 mb-2">{message.name} ({message.email})</p>
                          <p className="text-gray-700 overflow-hidden" style={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>{message.message}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Message Details & Reply */}
          <div className="lg:col-span-1">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Message Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">From</label>
                      <div className="flex items-center mt-1">
                        <User size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{selectedMessage.name}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <div className="text-gray-900">{selectedMessage.email}</div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Subject</label>
                      <div className="text-gray-900">{selectedMessage.subject}</div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Date</label>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        {new Date(selectedMessage.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Message</h3>
                  <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                    {selectedMessage.fullMessage || selectedMessage.message}
                  </div>
                </div>

                {/* Status Actions */}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Status</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedMessage.status === 'read'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <MailOpen size={16} className="inline mr-1" />
                      Mark as Read
                    </button>
                    
                    <button
                      onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedMessage.status === 'replied'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Check size={16} className="inline mr-1" />
                      Mark as Replied
                    </button>
                  </div>
                </div>

                {/* Reply Form */}
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-3">Reply</h3>
                  <form onSubmit={sendReply} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        To
                      </label>
                      <input
                        type="email"
                        value={replyForm.to}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={replyForm.subject}
                        onChange={(e) => setReplyForm({...replyForm, subject: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={replyForm.message}
                        onChange={(e) => setReplyForm({...replyForm, message: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        placeholder="Type your reply here..."
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <Send size={18} className="mr-2" />
                      Send Reply
                    </button>
                  </form>
                  
                                  </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <Mail size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

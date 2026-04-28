import { useState, useEffect } from 'react'
import { Mail, MailOpen, Send, Check, Clock, User, Calendar, Search, Filter, Archive, Trash2, Star, Reply, MoreVertical, X, MessageSquare, Menu, Home, Settings, LogOut, Bell, TrendingUp, Users, Activity, BarChart3 } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Admin = () => {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showActions, setShowActions] = useState(null)
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [replyForm, setReplyForm] = useState({
    to: '',
    subject: '',
    message: ''
  })
  const [sendingReply, setSendingReply] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('messages')

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/admin/messages')
      setMessages(response.data.messages || [])
      setLoading(false)
    } catch (error) {
      toast.error('Failed to fetch messages')
      setLoading(false)
    }
  }

  const updateMessageStatus = async (messageId, status) => {
    try {
      await axios.put(`/api/contact/${messageId}/status`, { status })
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, status } : msg
        )
      )
      
      toast.success(`Message marked as ${status}`)
    } catch (error) {
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
    setShowReplyModal(true)
    console.log('Reply form initialized:', {
      to: message.email,
      subject: `Re: ${message.subject}`
    })
  }

  const sendReply = async (e) => {
    e.preventDefault()
    setSendingReply(true)
    
    try {
      const response = await axios.post('/api/admin/reply', {
        to: replyForm.to,
        subject: replyForm.subject,
        message: replyForm.message,
        messageId: selectedMessage.id,
        originalMessage: selectedMessage.fullMessage || selectedMessage.message
      })
      
      if (response.data.success) {
        toast.success(response.data.message)
        
        setMessages(prev => 
          prev.map(msg => 
            msg.id === selectedMessage.id ? { ...msg, status: 'replied' } : msg
          )
        )
        
        setShowReplyModal(false)
        setReplyForm({ to: '', subject: '', message: '' })
        setSelectedMessage(null)
        
        if (response.data.emailSent) {
          toast.success('Email sent successfully!')
        } else {
          toast.info('Message marked as replied (email not configured)')
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send reply')
    } finally {
      setSendingReply(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread':
        return <Mail className="text-red-500" size={16} />
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
        return 'bg-red-100 text-red-800 border-red-200'
      case 'read':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'replied':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || message.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const statusCounts = {
    all: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary-400 rounded-full animate-spin" style={{ animationDelay: '0.15s' }}></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Loading your messages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300 ease-in-out flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>
              {sidebarOpen && (
                <div className="ml-3">
                  <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
                  <p className="text-xs text-gray-500">Message Manager</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center px-3 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'messages' ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Mail size={20} />
            {sidebarOpen && <span className="ml-3">Messages</span>}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center px-3 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'analytics' ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BarChart3 size={20} />
            {sidebarOpen && <span className="ml-3">Analytics</span>}
          </button>
          <a href="/" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Home size={20} />
            {sidebarOpen && <span className="ml-3">Portfolio</span>}
          </a>
          <button className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full text-left">
            <Settings size={20} />
            {sidebarOpen && <span className="ml-3">Settings</span>}
          </button>
        </nav>

        {/* Status Filter */}
        {sidebarOpen && activeTab === 'messages' && (
          <div className="p-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter Messages
            </h3>
            <div className="space-y-1">
              {[
                { key: 'all', label: 'All Messages', count: statusCounts.all, color: 'text-gray-700' },
                { key: 'unread', label: 'Unread', count: statusCounts.unread, color: 'text-red-600' },
                { key: 'read', label: 'Read', count: statusCounts.read, color: 'text-blue-600' },
                { key: 'replied', label: 'Replied', count: statusCounts.replied, color: 'text-green-600' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setFilterStatus(filter.key)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    filterStatus === filter.key
                      ? 'bg-primary-100 text-primary-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={filter.color}>{filter.label}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      {filter.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        {sidebarOpen && activeTab === 'messages' && (
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white p-4 shadow-lg">
              <h3 className="font-semibold mb-3 flex items-center">
                <Star className="mr-2" size={18} />
                Quick Stats
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-primary-100 text-sm">Unread</span>
                  <span className="font-bold">{statusCounts.unread}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-100 text-sm">Read</span>
                  <span className="font-bold">{statusCounts.read}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-100 text-sm">Replied</span>
                  <span className="font-bold">{statusCounts.replied}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@portfolio.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search messages by name, email, or subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4 ml-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Messages</p>
                  <p className="text-xl font-bold text-primary-600">{statusCounts.all}</p>
                </div>
                
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell size={20} className="text-gray-600" />
                  {statusCounts.unread > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <LogOut size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'messages' ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Messages ({filteredMessages.length})
                </h2>
              </div>
              
              {filteredMessages.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages found</h3>
                  <p className="text-gray-600">
                    {searchTerm ? 'Try adjusting your search terms' : 'No messages match your current filter'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-all duration-200 relative ${
                        selectedMessage?.id === message.id ? 'bg-primary-50 border-l-4 border-l-primary-600' : ''
                      }`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-3">
                            {getStatusIcon(message.status)}
                            <span className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(message.status)}`}>
                              {message.status}
                            </span>
                            <span className="ml-auto text-sm text-gray-500 flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {new Date(message.createdAt).toLocaleDateString()}
                            </span>
                            <div className="relative ml-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setShowActions(showActions === message.id ? null : message.id)
                                }}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                              >
                                <MoreVertical size={16} className="text-gray-400" />
                              </button>
                              
                              {/* Action Menu */}
                              {showActions === message.id && (
                                <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-1 min-w-48">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      updateMessageStatus(message.id, 'read')
                                      setShowActions(null)
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center"
                                  >
                                    <MailOpen size={16} className="mr-2 text-blue-500" />
                                    Mark as Read
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      updateMessageStatus(message.id, 'replied')
                                      setShowActions(null)
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center"
                                  >
                                    <Check size={16} className="mr-2 text-green-500" />
                                    Mark as Replied
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleReply(message)
                                      setShowActions(null)
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center"
                                  >
                                    <Reply size={16} className="mr-2 text-primary" />
                                    <span className="text-gray-700 font-medium">Reply</span>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      // Archive functionality could be added here
                                      setShowActions(null)
                                    }}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center"
                                  >
                                    <Archive size={16} className="mr-2 text-gray-500" />
                                    Archive
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-gray-900 mb-2 truncate">{message.subject}</h3>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <User size={14} className="mr-1" />
                            <span className="truncate">{message.name}</span>
                            <span className="mx-2">•</span>
                            <span className="truncate">{message.email}</span>
                          </div>
                          <p className="text-gray-700 line-clamp-2" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {message.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Analytics Dashboard */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{statusCounts.all}</h3>
                <p className="text-gray-600 text-sm">Total Messages</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <Activity className="text-orange-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{statusCounts.unread}</h3>
                <p className="text-gray-600 text-sm">Unread Messages</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <Users className="text-blue-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{statusCounts.replied}</h3>
                <p className="text-gray-600 text-sm">Replied Messages</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-purple-600" size={24} />
                  </div>
                  <Star className="text-yellow-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {statusCounts.all > 0 ? Math.round((statusCounts.replied / statusCounts.all) * 100) : 0}%
                </h3>
                <p className="text-gray-600 text-sm">Response Rate</p>
              </div>
            </div>
          )}
        </main>

        {/* Message Detail Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Message Details</h2>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {/* Sender Info */}
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2">From</label>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {selectedMessage.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{selectedMessage.name}</div>
                            <div className="text-sm text-gray-600">{selectedMessage.email}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2">Message Info</label>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar size={16} className="mr-2 text-gray-400" />
                            <span className="text-gray-700">
                              {new Date(selectedMessage.createdAt).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            {getStatusIcon(selectedMessage.status)}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(selectedMessage.status)}`}>
                              {selectedMessage.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.subject}</h3>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 mb-2">Message</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {selectedMessage.fullMessage || selectedMessage.message}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                      className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedMessage.status === 'read'
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <MailOpen size={18} className="inline mr-2" />
                      Mark as Read
                    </button>
                    
                    <button
                      onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                      className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedMessage.status === 'replied'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Check size={18} className="inline mr-2" />
                      Mark as Replied
                    </button>

                    <button
                      onClick={() => handleReply(selectedMessage)}
                      className="flex-1 min-w-[140px] bg-primary hover:bg-secondary text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Reply size={18} className="mr-2" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reply Modal */}
        {showReplyModal && selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <MessageSquare className="mr-3 text-primary" size={24} />
                  Reply to {selectedMessage.name}
                </h2>
                <button
                  onClick={() => setShowReplyModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto">
                <form onSubmit={sendReply} className="p-6">
                  {/* Original Message Preview */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Original Message:</h3>
                    <div className="bg-white rounded border border-gray-200 p-3">
                      <p className="text-sm text-gray-600 italic">
                        "{selectedMessage.fullMessage || selectedMessage.message}"
                      </p>
                    </div>
                  </div>

                  {/* Reply Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        To
                      </label>
                      <input
                        type="email"
                        value={replyForm.to}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={replyForm.subject}
                        onChange={(e) => {
                          console.log('Subject input changed:', e.target.value)
                          setReplyForm({...replyForm, subject: e.target.value})
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Reply
                      </label>
                      <textarea
                        rows={6}
                        value={replyForm.message}
                        onChange={(e) => {
                          console.log('Message input changed:', e.target.value)
                          setReplyForm({...replyForm, message: e.target.value})
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                        placeholder="Type your reply here..."
                        required
                      />
                    </div>
                  </div>

                  {/* Email Configuration Notice */}
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">Email Configuration</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>Email sending is configured in the backend.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowReplyModal(false)}
                      className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    
                    <button
                      type="submit"
                      disabled={sendingReply}
                      className="flex-1 bg-primary hover:bg-secondary text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {sendingReply ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Reply
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin

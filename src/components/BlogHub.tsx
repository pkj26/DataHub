import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  X,
  Share2,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/directoryData';
import { ActiveTab } from '../types';

interface BlogHubProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export const BlogHub: React.FC<BlogHubProps> = ({ setActiveTab }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f4f8fe] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-blue-200">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>SEO Content Hub & Legal Insights</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            India Business Directory Blog
          </h1>

          <p className="text-sm text-slate-600">
            Guides on MCA company registration, GST compliance, city industrial clusters, and B2B lead generation strategies.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (MCA, GST, Jaipur, B2B leads)..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-3 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 mt-4">
                <span className="text-slate-400 text-[11px] font-normal">{post.date}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>

              <div className="space-y-2 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    if (setActiveTab) setActiveTab('companies');
                  }}
                  className="bg-[#2563eb] text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer"
                >
                  Explore Directory Companies →
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

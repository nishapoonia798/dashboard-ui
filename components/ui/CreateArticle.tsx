'use client';

import { useState } from 'react';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('');
  const [traffic, setTraffic] = useState('');
  const [words, setWords] = useState('');
  const [content, setContent] = useState('');
  const [publish, setPublish] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log form values; later you can call API or save data
    console.log({
      title,
      keyword,
      traffic,
      words,
      content,
      publish,
    });

    alert('Article Created (check console)');
    
    // Reset form
    setTitle('');
    setKeyword('');
    setTraffic('');
    setWords('');
    setContent('');
    setPublish(false);
  };

  return (
    <main className="ml-64 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Article Title"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Keyword</label>
            <input
              type="text"
              required
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Keyword (e.g., league of legends)"
            />
          </div>
          <div style={{width: '120px'}}>
            <label className="block font-semibold mb-1">Traffic</label>
            <input
              type="number"
              required
              value={traffic}
              onChange={(e) => setTraffic(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="2240000"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Words</label>
          <input
            type="number"
            required
            value={words}
            onChange={(e) => setWords(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Word count"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Content</label>
          <textarea
            required
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Write the article content here..."
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="publish"
            type="checkbox"
            checked={publish}
            onChange={(e) => setPublish(e.target.checked)}
            className="w-5 h-5"
          />
          <label htmlFor="publish" className="font-semibold select-none">Publish Now</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Article
        </button>
      </form>
    </main>
  );
}

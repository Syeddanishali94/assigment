import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8 md:py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>
          About Us
        </h1>
        
        <div className="mb-12">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Blog community"
            width={800}
            height={300}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <p className="text-lg text-center mb-12 text-gray-600">
          Welcome to <strong>Blog App</strong>, your go-to platform for exploring insightful, engaging, and thought-provoking content. We are a community-driven blogging platform that believes in the power of words to inspire, educate, and connect people from all walks of life.
        </p>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At <strong>Blog App</strong>, our mission is to empower creators and readers by providing a platform where ideas thrive. Whether you're a passionate writer or a curious reader, we aim to create a space where diverse perspectives meet and meaningful conversations unfold.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">🎤</span>
                  <span><strong>A Voice for Everyone:</strong> Share your thoughts, experiences, and expertise with a global audience.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📚</span>
                  <span><strong>Quality Content:</strong> Discover articles, tutorials, and stories on various topics.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span><strong>Community Connection:</strong> Engage with like-minded individuals and grow together.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">🖥️</span>
                  <span><strong>User-Friendly Interface:</strong> Our app is designed for seamless writing and reading.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span><strong>Dynamic Features:</strong> From personalized recommendations to robust analytics for writers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌈</span>
                  <span><strong>Diverse Categories:</strong> Find content that resonates with you, no matter your interests.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
            <p className="text-gray-700 mb-4">
              At <strong>Blog App</strong>, we believe everyone has a story to tell and a perspective worth sharing. Join us in building a vibrant community that values creativity, knowledge, and connection.
            </p>
            <p className="text-gray-700">
              Start exploring, writing, and engaging today. Together, let's create a world where ideas spark change!
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}


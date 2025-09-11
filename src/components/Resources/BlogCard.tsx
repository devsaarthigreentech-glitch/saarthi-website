// src/components/Resources/BlogCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export type BlogSummary = {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  image?: string
}

export default function BlogCard({ blog }: { blog: BlogSummary }) {
  return (
    <article className="group rounded-2xl bg-white shadow-sm hover:shadow-md overflow-hidden">
      <Link href={blog.slug} className="block">
        <div className="relative h-44 w-full">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="h-full w-full bg-slate-100" />
          )}
        </div>

        <div className="p-5">
          <time className="block text-sm text-slate-500">{new Date(blog.date).toLocaleDateString()}</time>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{blog.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{blog.excerpt}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand,#33A04A)]">
            Read article →
          </div>
        </div>
      </Link>
    </article>
  )
}

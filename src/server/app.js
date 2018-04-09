const express = require('express')
const stories = require('./data/stories.json')
const storyApp = express()

const formatResponse = response => {
  return {
    data: response,
    meta: []
  }
}

const formatStories = (stories, storyId) => {
  return stories.map(story => {
    return {
      id: story.id,
      title: story.title
    }
  })
}

const findStory = (stories, storyId) => {
  return stories.find(story => {
    return story.id === storyId
  })
}

// remove the pages from each chapter to lighten request
const formatStory = (stories, storyId) => {
  // hint hint self invoking function
  return (({ title, chapters, id }) => ({
    title,
    chapters: chapters.map(chapter => {
      const { id, chapterTitle: title, chapterNumber: number, pages } = chapter
      return {
        id,
        title,
        number,
        length: pages.length
      }
    }),
    id
  }))(findStory(stories, storyId))
}

storyApp.get('/api/stories', (req, res) => res.send(formatResponse(formatStories(stories.data))))

storyApp.get('/api/stories/:id', (req, res) =>
  res.send(formatResponse(formatStory(stories.data, req.params.id)))
)

storyApp.listen(5000, () => console.log('Story? Server listening on port 5000'))

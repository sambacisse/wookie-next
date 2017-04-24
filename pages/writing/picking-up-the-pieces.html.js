
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-from-hast'
import components from '../../src/components/md-components'

export default (props) => {
  const post = {
  "slug": "picking-up-the-pieces",
  "path": "src/posts/picking-up-the-pieces.md",
  "permalink": "writing/picking-up-the-pieces.html",
  "title": "Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors",
  "updatedAt": "2016-09-17T03:47:17.000Z"
}
  const body = {"type":"div","props":{},"children":[{"type":"h2","props":{},"children":["Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors"]},"\n",{"type":"p","props":{},"children":["Metaphors are fractals of language: once you start to examine them closely, you end up seeing the same pattern over and over and over again."]},"\n",{"type":"p","props":{},"children":["I tend to find myself re-using the same (usually tired) metaphors in all sorts of different situations. But let's not chalk it up to laziness right away. Once I start seeing a particular pattern that's useful for solving problems, well, as they (I) say, I've found my hammer, and everything becomes a nail.",{"type":"sup","props":{},"children":[{"type":"a","props":{"href":"#picking-up-the-pieces-01"},"children":["1"]}]}]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["Helpful Metaphors"]}]},"\n",{"type":"p","props":{},"children":["Travel metaphors are always useful, bringing in words like eyeline, takeoff, and landing into conversations makes work feel more like a swashbuckling adventure than a boring slog through a checklist."]},"\n",{"type":"p","props":{},"children":["Eggs rolling towards the edge of a table is a particularly good image I've borrowed from Matt Work. It's so damn useful when you need show how to deal with decision overload. \"There are a dozen eggs rolling toward the edge of the table. You can only catch one.\""]},"\n",{"type":"p","props":{},"children":["It's an argument against micromanagement and interventionism, while offering practical advice for most types of people wrangling problems."]},"\n",{"type":"p","props":{},"children":[{"type":"span","props":{"className":"f1 tc dib w-100"},"children":["🍳"]}]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["Unhelpful Metaphors"]}]},"\n",{"type":"p","props":{},"children":["Have you ever found yourself saying the back half of a sentence in which you've been using an obtuse or random metaphor to summarize a situation, and you realize that your captive audience is making a face because you are in the middle of a cognitive leap so bizarre it would make an anti-comedian blush? Me too."]},"\n",{"type":"p","props":{},"children":["I call that an \"unhelpful metaphor.\" Even if it does make sense without being a stretch, if it makes the poor audience question the sanity of the speaker it's safe to say it should probably be left out."]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["Finding balance"]}]},"\n",{"type":"p","props":{},"children":["Usually when I start employing these colorful turns of phrase it's because I'm trending to frame a concept, and I'm using roughly hewn idioms in an imprecise language to do it. Like how a charcoal rubbing brings out the detail hidden to the naked eye, an applicable metaphor, however weird, can help drawn out a details that might not be readily apparent."]},"\n",{"type":"p","props":{},"children":["So these days I just say it, whether or not it's a weird comparison. I'm lending my point of view, and in a subjective world, the sooner you understand someone's perspective, the sooner you'l be able to establish empathy."]},"\n",{"type":"aside","props":{},"children":["\n  ",{"type":"ol","props":{},"children":["\n    ",{"type":"li","props":{"id":"picking-up-the-pieces-01"},"children":["Ok. Let's  try and get through the rest this without over-packing every sentence with parenthetical asides (you're not Faulkner, after all.)"]},"\n  "]},"\n"]}]}
  return (
    <Post {...props}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}

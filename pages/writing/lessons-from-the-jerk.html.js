
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-from-hast'
import components from '../../src/components/md-components'

export default (props) => {
  const post = {
  "slug": "lessons-from-the-jerk",
  "path": "src/posts/lessons-from-the-jerk.md",
  "permalink": "writing/lessons-from-the-jerk.html",
  "title": "Lessons from The Jerk",
  "updatedAt": "2017-04-24T06:19:52.000Z"
}
  const body = {"type":"div","props":{},"children":[{"type":"h2","props":{},"children":["Lessons from The Jerk"]},"\n",{"type":"p","props":{},"children":["If you're not familiar with ",{"type":"a","props":{"href":"http://www.imdb.com/title/tt0079367/"},"children":["The Jerk (1978)"]}," starring Steve Martin, do yourself (well really, do ",{"type":"em","props":{},"children":["me"]}," a favor) and watch it. It's streaming on Amazon Video. Just go watch it. I'll wait."]},"\n",{"type":"p","props":{"className":"tc"},"children":["\n  ",{"type":"img","props":{"src":"/static/img/the-jerk-1978.jpg","className":"w-50-ns w-100 ml3-ns fr-ns mt1 mb2 pa1 br1 ba b--rainbows"}},"\n"]},"\n",{"type":"p","props":{},"children":["Now that you're back, I want to share 3 very important pieces of advice that the star of our story, Maven Johnson, receives from his loving family before he departs on his Hero's Journey:"]},"\n",{"type":"ol","props":{},"children":["\n",{"type":"li","props":{},"children":["The Lord loves a working man"]},"\n",{"type":"li","props":{},"children":["Don't trust whitey"]},"\n",{"type":"li","props":{},"children":["See a doctor and get rid of it"]},"\n"]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["This is universally good advice."]}]},"\n",{"type":"p","props":{},"children":["I may not believe in any higher power, but showing up and being willing to get your hands dirty gives you more advantages than not."]},"\n",{"type":"p","props":{},"children":["I may not be anything other than an average white american man, but I sure as hell don't trust any authority figure. It's a reasonable precautionary measure."]},"\n",{"type":"p","props":{},"children":["And I may not follow all good advice, but seriously you should see a doctor every once in a while. And call your mom."]},"\n",{"type":"p","props":{},"children":["I first saw these painted on a plaque in a tattoo shop in Boulder, completely removed from their context in The Jerk, which I had already seen but didn't connect at the time. I had remembered the signage despite missing the connection to the film. I re-watched it last week and finally noticed, and reveled in the warmth of a pop-culture reference coming full circle: it was a moment of life's weird interconnected on full display. I spent a lot of time in that tattoo shop."]},"\n",{"type":"p","props":{},"children":["What difficult-to-ignore advice has influenced you?"]}]}
  return (
    <Post {...props}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}

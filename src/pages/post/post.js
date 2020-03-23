<div class="post-page">

  <div class="banner">
    <div class="container">

      <h1>How to build webapps that scale</h1>

      <div class="post-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="profile.html" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>

    </div>
  </div>

  <div class="container page">

    <div class="row post-content">
      <div class="col-md-12">
        <p>Web development technologies have evolved at an incredible clip over the past few years. We&#39;ve gone from rudimentary DOM manipulation with libraries like jQuery to supercharged web applications organized &amp; powered by elegant MV* based frameworks like AngularJS. Pair this with significant increases in browser rendering speeds, and it is now easier than ever before to build production quality applications on top of Javascript, HTML5, and CSS3.</p><p>While these advances have been incredible, they are only just starting to affect the clear platform of the future: mobile. For years, mobile rendering speeds were atrocious, and the MVC frameworks &amp; UI libraries provided by iOS and Android were far superior to writing mobile apps using web technologies. There were also some very public failures -- Facebook famously wrote their first iOS app in 2011 using HTML5 but ended up scrapping it due to terrible performance.</p><p>For years now, hybrid apps have been mocked and jeered by native app developers for being clunky and ugly, having subpar performance, and having no advantages over native apps. While these may have been valid reasons in 2011, they are now virtually baseless, thanks to a collection of new technologies that have emerged over the past two years. With these technologies, you can design, build, and deploy robust mobile apps faster than you could with native technologies, all while incurring little to no app performance penalties. This is thanks in large part to super fast mobile browser rendering speeds and better JavaScript performance. This course is designed to teach you how to effectively use these new technologies to build insanely great mobile apps.</p><p>Without further ado, we&#39;d like to welcome you to the future of mobile app development, freed from the shackles of native languages &amp; frameworks. Let&#39;s learn what the new mobile stack consists of and how it works.</p>
        <h2 id="introducing-ionic">Introducing Ionic.</h2>
        <p>Before, building hybrid apps was a chore -- not because it was hard to build web pages, but because it was hard to build full-fledged web applications. With AngularJS, that has changed. As a result, Angular became the core innovation that made hybrid apps possible. The bright folks at Drifty were some of the first to realize this and subsequently created the <a href="http://ionicframework.com/" target="_blank">Ionic Framework</a> to bridge the gap between AngularJS web apps and hybrid mobile apps. Since launching a little over a year ago, the Ionic Framework has <a href="http://www.google.com/trends/explore?hl=en-US&amp;q=ionic+framework&amp;cmpt=q&amp;tz&amp;tz&amp;content=1" target="_blank">quickly grown in popularity amongst developers</a> and their <a href="https://github.com/driftyco/ionic" target="_blank">main Github repo</a> has over 13K stars as of this writing.</p><p>Ionic provides similar functionality for AngularJS that <a href="https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKit_Framework/" target="_blank">iOS UIKit</a> provides for Obj-C/Swift, and that <a href="http://developer.android.com/guide/topics/ui/overview.html" target="_blank">Android UI elements</a> provides for Java. Core mobile UI paradigms are available to developers out of the box, which means that developers can focus on building apps, instead of common user interface elements. Some examples of these include <a href="http://ionicframework.com/docs/api/directive/ionList/" target="_blank">list views</a>, <a href="http://ionicframework.com/docs/api/directive/ionNavView/" target="_blank">stateful navigation</a>, <a href="http://ionicframework.com/docs/nightly/api/directive/ionTabs/" target="_blank">tab bars</a>, <a href="http://ionicframework.com/docs/api/service/$ionicActionSheet/" target="_blank">action sheets</a>, and <a href="http://ionicframework.com/docs/nightly/api/" target="_blank">so much more</a>.</p>
        <p>Ionic is a great solution for creating both mobile web apps and native apps. The first sections of this course will go over structuring Ionic apps that can run on the web. Then we will cover packaging that same exact code into a native app. We will be using a build tool called Cordova for packaging our app. For those unfamiliar with Cordova, it is the open source core of Adobe&#39;s proprietary PhoneGap build system. Adobe describes it with this analogy: Cordova is to PhoneGap as Blink is to Chrome. Basically, PhoneGap is Cordova plus a whole bunch of other Adobe stuff.</p>
        <p>The folks at Ionic have done a fantastic job of making Cordova super easy to use by directly wrapping it in their &#39;ionic&#39; command line tool (don&#39;t worry, we&#39;ll cover this later). Just remember that Cordova is something that is running under the hood of your hybrid app that you will rarely need to worry about, but we will cover some common interactions with it in this course.</p>
        <h2 id="what-we-re-going-to-build">What we&#39;re going to build</h2>
        <p>We will be building an app called Songhop, a &quot;Tinder for music&quot; app that allows you to listen to 30-second song samples and favorite the ones you like. This is based on a real Ionic/Cordova powered app we built that exists on the <a href="https://itunes.apple.com/us/app/songhop/id899245239?mt=8" target="_blank">iOS App Store</a> -- feel free to download it to get a feeling for what Ionic is capable of (and rate it 5 stars :). It&#39;s also worth noting that it only took us a month to build the Songhop app that&#39;s on the App Store, so that should give you an idea of how fast you can build &amp; iterate using Ionic / Cordova.</p><p><strong>You can also see a <a href="https://ionic-songhop.herokuapp.com" target="_blank">live demo of the completed application we&#39;ll be building here</a> (resize your browser window to the size of a phone for the best experience).</strong></p><p>We&#39;ll be covering a wide variety of topics in this course: scaffolding a new application, testing it in the emulator, installing native plugins for manipulating audio &amp; files, swipe gestures for our interface, installing the app on your own device, deploying to the iOS &amp; Android app stores, and so much more.</p>
      </div>
    </div>

    <hr />

    <div class="post-actions">
      <div class="post-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="profile.html" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>

        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>
    </div>

    <div class="row">

      <div class="col-md-8 col-md-offset-2">

        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="profile.html" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="profile.html" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="profile.html" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="profile.html" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>

        <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>

      </div>

    </div>

  </div>

</div>
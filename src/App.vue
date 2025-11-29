<template>
  <div>
    <!-- Skip link for keyboard users -->
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1E2B26] focus:px-4 focus:py-2 focus:rounded focus:shadow">Skip to content</a>

    <!-- Header -->
    <header class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-[#E6E9E4]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8DF] text-[#2B4238] font-semibold">一</span>
            <span class="text-lg font-semibold tracking-wide">Yi Ren <span class="text-[#6A7F75]">(一人)</span></span>
          </a>
          <nav aria-label="Main" class="hidden md:flex items-center gap-6">
            <a href="#tea-sets" class="text-sm hover:text-[#2B4238] text-[#3E5A4F] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Tea Sets</a>
            <a href="#teas" class="text-sm hover:text-[#2B4238] text-[#3E5A4F] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Teas</a>
            <a href="#events" class="text-sm hover:text-[#2B4238] text-[#3E5A4F] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Events</a>
            <a href="#story" class="text-sm hover:text-[#2B4238] text-[#3E5A4F] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Story</a>
          </nav>
          <a href="#cta" class="hidden sm:inline-flex items-center gap-2 bg-[#2F4A40] text-white text-sm px-4 py-2 rounded-full shadow hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
            Start Ritual
          </a>
        </div>
      </div>
    </header>

    <main id="main" class="relative">
      <!-- HERO -->
      <section aria-labelledby="hero-title" class="relative overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <!-- 1/5 gen-image: Hero background atmosphere -->
          <img id="hero-atmosphere" src="/assets/img-58QPv0sBTW8zOs4NQmTsYOAC.png?st=2025-11-29T08%3A37%3A49Z&se=2025-11-29T10%3A37%3A49Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=b1a0ae1f-618f-4548-84fd-8b16cacd5485&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-28T21%3A02%3A16Z&ske=2025-11-29T21%3A02%3A16Z&sks=b&skv=2024-08-04&sig=/uZ3CsbfbaQDOZ37KrELgJI6HfcjoBYs6y3W9E86yfc%3D" alt="hero-atmosphere" />
          <div class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-[#F6F7F4]"></div>
        </div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div class="max-w-3xl">
            <h1 id="hero-title" class="text-4xl sm:text-6xl font-serif leading-tight text-[#1E2B26]">
              Serve Your Own Space.
            </h1>
            <p class="mt-4 text-lg text-[#3E5A4F]">
              Modern tea rituals for one—crafted for quiet mornings, soft evenings, and moments between.
            </p>
            <p class="mt-2 text-[#50695E]">
              Yi Ren (一人) is for digital nomads, freelancers, and anyone who wants a peaceful pause in the day.
            </p>
            <div class="mt-8 flex items-center gap-4">
              <a href="#tea-sets" cla class="inline-flex items-center justify-center bg-[#2F4A40] text-white px-6 py-3 rounded-full shadow hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                Explore Tea Sets
              </a>
              <a href="#teas" class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#BFD3C5] text-[#2F4A40] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                Browse Teas
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- BRAND STORY -->
      <section id="story" aria-labelledby="story-title" class="py-16 sm:py-24 bg-[#F2F5F2]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="story-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Yi Ren (一人) — One Person</h2>
            <p class="mt-4 text-[#3E5A4F]">
              Yi Ren means "one person." It honors the quiet strength of solitude: the way a single cup of tea can soften a hard day, make a small room feel like a sanctuary, and give shape to time.
            </p>
            <p class="mt-4 text-[#3E5A4F]">
              Our focus on solo rituals began with Ms. Lulu, a tea host who noticed that many visitors—students, expats, young professionals—were living away from home and searching for steadiness. She started a small community practice: a simple tea for one, shared side-by-side yet privately.
            </p>
            <p class="mt-4 text-[#3E5A4F]">
              Yi Ren carries this spirit into a modern, international identity. We weave subtle Asian inspiration with contemporary design so your tea corner fits in a studio, a co-working desk, or a suitcase.
            </p>
            <p class="mt-4 text-[#3E5A4F]">
              Philosophy: serve your own space first. When you can hold calm in your hands, you can share it with the world.
            </p>
          </div>
          <div class="relative">
            <!-- 2/5 gen-image: Brand story visual -->
            <img id="brand-story" src="/assets/img-9SVZb6d4RdrDyaAq6UUeLBEO.png?st=2025-11-29T08%3A38%3A02Z&se=2025-11-29T10%3A38%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-28T20%3A46%3A07Z&ske=2025-11-29T20%3A46%3A07Z&sks=b&skv=2024-08-04&sig=crF82eFzrzXHUl6Wsjl3WyC6HbI858JU0D0beKWVTM0%3D" alt="brand-story" />
          </div>
        </div>
      </section>

      <!-- FEATURED PRODUCTS — Tea Sets -->
      <section id="tea-sets" aria-labelledby="sets-title" class="py-16 sm:py-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 id="sets-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Featured Tea Sets</h2>
              <p class="mt-2 text-[#50695E]">Compact, refined, and made for daily solo use.</p>
            </div>
            <a href="#cta" class="hidden sm:inline-flex items-center px-4 py-2 rounded-full border border-[#BFD3C5] text-[#2F4A40] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]">
              Shop All
            </a>
          </div>

          <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Product 1 with image -->
            <article class="group bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="relative">
                <!-- 3/5 gen-image: Product main -->
                <img id="product-solo-gongfu" src="/assets/img-31XJXWySqbbXRBlB8NPVszD0.png?st=2025-11-29T08%3A38%3A19Z&se=2025-11-29T10%3A38%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=77e5a8ec-6bd1-4477-8afc-16703a64f029&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-29T09%3A38%3A19Z&ske=2025-11-30T09%3A38%3A19Z&sks=b&skv=2024-08-04&sig=5KkcwnxaRdHkUbZPf6w85f7yhAwgLeVYEJOL4rYIt6w%3D" alt="product-solo-gongfu" />
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Solo Gongfu Set</h3>
                <p class="mt-2 text-[#3E5A4F]">Stone-glazed gaiwan, single cup, and maple drip tray. A palm-sized landscape of steam and quiet.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$78</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>

            <!-- Product 2 without image (gradient block as placeholder) -->
            <article class="group bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-44 rounded-xl bg-gradient-to-br from-[#E6EFE9] to-[#F3F5F1] flex items-center justify-center">
                <span class="text-[#6A7F75] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Quiet Morning Set</h3>
                <p class="mt-2 text-[#3E5A4F]">Small ceramic teapot, single cup, and linen coaster. Soft sand glaze for gentle starts.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$92</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>

            <!-- Product 3 without image -->
            <article class="group bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-44 rounded-xl bg-gradient-to-br from-[#EEE8E2] to-[#F7F4F1] flex items-center justify-center">
                <span class="text-[#8C7D73] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Evening Ember Tray</h3>
                <p class="mt-2 text-[#3E5A4F]">Low wooden tray with heat pad and single-cup warmer—quiet light for slow pours at dusk.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$118</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- FEATURED TEAS -->
      <section id="teas" aria-labelledby="teas-title" class="py-16 sm:py-24 bg-[#F8FAF8]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="teas-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Featured Teas</h2>
          <p class="mt-2 text-[#50695E]">Comforting profiles tuned for Western palates while honoring origin.</p>

          <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Tea 1 with image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <!-- 4/5 gen-image: Tea -->
              <img id="tea-yunnan-gold" src="/assets/img-UxJtTNo4CNmqgO9PbnZK8YXQ.png?st=2025-11-29T08%3A38%3A34Z&se=2025-11-29T10%3A38%3A34Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=77e5a8ec-6bd1-4477-8afc-16703a64f029&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-29T09%3A38%3A34Z&ske=2025-11-30T09%3A38%3A34Z&sks=b&skv=2024-08-04&sig=PxNoOH7SO%2B6XzGxy0j%2Bn90L9LTy5%2BqviKh608nbekGg%3D" alt="tea-yunnan-gold" />
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Yunnan Gold Black</h3>
                <p class="mt-1 text-[#3E5A4F]">
                  Taste: honeyed cocoa, warm bread, gentle spice—rich but smooth, great with or without milk.
                </p>
                <p class="mt-1 text-[#6A7F75]">Benefits: steady focus, cozy warmth, morning-friendly.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$19</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>

            <!-- Tea 2 no image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-40 rounded-xl bg-gradient-to-br from-[#E6EFE9] to-[#F3F5F1] flex items-center justify-center">
                <span class="text-[#6A7F75] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Jasmine Spring Green</h3>
                <p class="mt-1 text-[#3E5A4F]">
                  Taste: soft jasmine aroma, clean grape-skin freshness—fragrant without bitterness.
                </p>
                <p class="mt-1 text-[#6A7F75]">Benefits: calming breath, afternoon reset, gentle clarity.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$16</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>

            <!-- Tea 3 no image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-40 rounded-xl bg-gradient-to-br from-[#EEE8E2] to-[#F7F4F1] flex items-center justify-center">
                <span class="text-[#8C7D73] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Roasted Oolong Comfort</h3>
                <p class="mt-1 text-[#3E5A4F]">
                  Taste: toasted nuts, caramelized pear, hint of vanilla—warm and round for evenings.
                </p>
                <p class="mt-1 text-[#6A7F75]">Benefits: unwinds tension, cozy digestion, night-friendly.</p>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-[#2F4A40] font-semibold">$22</span>
                <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Buy Now
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- EVENTS -->
      <section id="events" aria-labelledby="events-title" class="py-16 sm:py-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 id="events-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Events & Ceremonies</h2>
              <p class="mt-2 text-[#50695E]">Learn, breathe, and pour—together, gently.</p>
            </div>
          </div>

          <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Event 1 with image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <!-- 5/5 gen-image: Event -->
              <img id="event-ceremony" src="/assets/img-saTLy8YvWj3IPFaIDY3JSTQC.png?st=2025-11-29T08%3A38%3A47Z&se=2025-11-29T10%3A38%3A47Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-29T09%3A38%3A47Z&ske=2025-11-30T09%3A38%3A47Z&sks=b&skv=2024-08-04&sig=pfH9EpeBeSftjhaAiWmUVV8khACQdQJ0IQpCbg8Uh%2Bs%3D" alt="event-ceremony" />
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Morning Peace Ceremony</h3>
                <p class="mt-1 text-[#3E5A4F]">Begin the day with slow pours and breath work guided by our host.</p>
                <p class="mt-1 text-[#6A7F75]">Sat, Jan 18 · 9:00–10:00</p>
              </div>
              <div class="mt-4">
                <button type="button" class="w-full inline-flex items-center justify-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Join Event
                </button>
              </div>
            </article>

            <!-- Event 2 no image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-40 rounded-xl bg-gradient-to-br from-[#E6EFE9] to-[#F3F5F1] flex items-center justify-center">
                <span class="text-[#6A7F75] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Tea Ritual Workshop</h3>
                <p class="mt-1 text-[#3E5A4F]">Hands-on session: water temperature, timing, and a calm setup for one.</p>
                <p class="mt-1 text-[#6A7F75]">Sun, Jan 26 · 14:00–15:30</p>
              </div>
              <div class="mt-4">
                <button type="button" class="w-full inline-flex items-center justify-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Join Event
                </button>
              </div>
            </article>

            <!-- Event 3 no image -->
            <article class="bg-white rounded-2xl border border-[#E6E9E4] p-4 flex flex-col">
              <div class="w-full h-40 rounded-xl bg-gradient-to-br from-[#EEE8E2] to-[#F7F4F1] flex items-center justify-center">
                <span class="text-[#8C7D73] text-sm">Minimal Placeholder</span>
              </div>
              <div class="mt-4 flex-1">
                <h3 class="text-xl font-semibold text-[#1E2B26]">Introduction to Tea Sets</h3>
                <p class="mt-1 text-[#3E5A4F]">Explore teapots, gaiwans, cups, and how to pick a set that suits one person.</p>
                <p class="mt-1 text-[#6A7F75]">Thu, Feb 6 · 18:30–19:30</p>
              </div>
              <div class="mt-4">
                <button type="button" class="w-full inline-flex items-center justify-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Join Event
                </button>
              </div>
            </article>
          </div>

          <!-- RSVP / Invite form with validation -->
          <div class="mt-12 max-w-3xl bg-white border border-[#E6E9E4] rounded-2xl p-6">
            <h3 class="text-2xl font-serif text-[#1E2B26]">Request an Invite</h3>
            <p class="mt-2 text-[#50695E]">Small circles only. Leave your info and we’ll send a gentle reminder.</p>

            <form @submit.prevent="handleSubmit" class="mt-6 grid sm:grid-cols-2 gap-4" novalidate>
              <div class="sm:col-span-1">
                <label for="name" class="block text-sm font-medium text-[#2F4A40]">Name</label>
                <input
                  id="name"
                  v-model.trim="form.name"
                  :aria-invalid="errors.name ? 'true' : 'false'"
                  :aria-describedby="errors.name ? 'name-error' : undefined"
                  class="mt-2 w-full rounded-lg border border-[#BFD3C5] bg-white px-3 py-2 text-[#1E2B26] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                />
                <p v-if="errors.name" id="name-error" class="mt-1 text-sm text-[#8C3B3B]">{{ errors.name }}</p>
              </div>

              <div class="sm:col-span-1">
                <label for="email" class="block text-sm font-medium text-[#2F4A40]">Email</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  :aria-invalid="errors.email ? 'true' : 'false'"
                  :aria-describedby="errors.email ? 'email-error' : undefined"
                  class="mt-2 w-full rounded-lg border border-[#BFD3C5] bg-white px-3 py-2 text-[#1E2B26] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                />
                <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-[#8C3B3B]">{{ errors.email }}</p>
              </div>

              <div class="sm:col-span-2">
                <label for="event" class="block text-sm font-medium text-[#2F4A40]">Choose an Event</label>
                <select
                  id="event"
                  v-model="form.event"
                  :aria-invalid="errors.event ? 'true' : 'false'"
                  :aria-describedby="errors.event ? 'event-error' : undefined"
                  class="mt-2 w-full rounded-lg border border-[#BFD3C5] bg-white px-3 py-2 text-[#1E2B26] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]"
                  required
                >
                  <option value="">Select...</option>
                  <option>Morning Peace Ceremony — Sat, Jan 18</option>
                  <option>Tea Ritual Workshop — Sun, Jan 26</option>
                  <option>Introduction to Tea Sets — Thu, Feb 6</option>
                </select>
                <p v-if="errors.event" id="event-error" class="mt-1 text-sm text-[#8C3B3B]">{{ errors.event }}</p>
              </div>

              <div class="sm:col-span-2 flex items-center justify-between">
                <button type="submit" class="inline-flex items-center bg-[#2F4A40] text-white px-5 py-2.5 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
                  Request Invite
                </button>
                <span class="text-sm text-[#6A7F75]">We’ll email a confirmation if space is available.</span>
              </div>

              <!-- ARIA live region -->
              <p role="status" aria-live="polite" class="sr-only">{{ liveMessage }}</p>
            </form>
          </div>
        </div>
      </section>

      <!-- LIFESTYLE -->
      <section id="lifestyle" aria-labelledby="life-title" class="py-16 sm:py-24 bg-[#F2F5F2]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 id="life-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">A Ritual That Holds You</h2>
            <p class="mt-2 text-[#3E5A4F]">
              Yi Ren helps you carve a personal space for calm—five minutes or fifty. These gentle practices make small rooms feel spacious and busy days feel kinder.
            </p>
            <ul class="mt-6 space-y-4">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#9FC5B3]"></span>
                <div>
                  <h3 class="font-semibold text-[#2F4A40]">Morning Routine</h3>
                  <p class="text-[#3E5A4F]">Boil water, open the window, pour two rounds. Let steam set your pace for the day.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#C6B9A9]"></span>
                <div>
                  <h3 class="font-semibold text-[#2F4A40]">Evening Ritual</h3>
                  <p class="text-[#3E5A4F]">Dim the lights, use a single cup, slow your breath. Warm ceramic becomes a small hearth.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#BFD3C5]"></span>
                <div>
                  <h3 class="font-semibold text-[#2F4A40]">Emotional Wellness</h3>
                  <p class="text-[#3E5A4F]">Repetition comforts. Taste and temperature anchor your senses when thoughts race.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-[#D7CFC7]"></span>
                <div>
                  <h3 class="font-semibold text-[#2F4A40]">Belonging</h3>
                  <p class="text-[#3E5A4F]">Solo doesn’t mean alone. Our ceremonies connect quiet people in a gentle shared rhythm.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="bg-white border border-[#E6E9E4] rounded-2xl p-6">
            <h3 class="text-2xl font-serif text-[#1E2B26]">How to Start</h3>
            <ol class="mt-4 space-y-3 list-decimal pl-5 text-[#3E5A4F]">
              <li>Choose a small corner—desk, windowsill, or tray.</li>
              <li>Keep one set visible: kettle, cup, your tea of the week.</li>
              <li>Pick a time you can keep: two songs in the morning, one in the evening.</li>
              <li>Let taste be the timer. Sip slowly; breathe between pours.</li>
            </ol>
            <div class="mt-6 grid sm:grid-cols-2 gap-3">
              <a href="#tea-sets" class="inline-flex items-center justify-center bg-[#2F4A40] text-white px-4 py-2.5 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">Shop Tea Sets</a>
              <a href="#teas" class="inline-flex items-center justify-center border border-[#BFD3C5] text-[#2F4A40] px-4 py-2.5 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">Browse Teas</a>
            </div>
          </div>
        </div>
      </section>

      <!-- STYLE GUIDE -->
      <section id="style-guide" aria-labelledby="style-title" class="py-16 sm:py-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 id="style-title" class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Visual Style Guide</h2>

          <div class="mt-8 grid lg:grid-cols-3 gap-8">
            <!-- Colors -->
            <div>
              <h3 class="text-xl font-semibold text-[#2F4A40]">Colors</h3>
              <p class="mt-2 text-[#3E5A4F]">Calm pastels, soft greens, beiges, muted browns, and warm light accents.</p>
              <div class="mt-4 grid grid-cols-5 gap-2">
                <div class="h-12 rounded bg-[#F6F7F4]" title="#F6F7F4"></div>
                <div class="h-12 rounded bg-[#DDE8DF]" title="#DDE8DF"></div>
                <div class="h-12 rounded bg-[#BFD3C5]" title="#BFD3C5"></div>
                <div class="h-12 rounded bg-[#C6B9A9]" title="#C6B9A9"></div>
                <div class="h-12 rounded bg-[#2F4A40]" title="#2F4A40"></div>
              </div>
              <p class="mt-2 text-sm text-[#6A7F75]">Use greens for anchors, beiges/browns for warmth, lots of breathing room.</p>
            </div>

            <!-- Photography -->
            <div>
              <h3 class="text-xl font-semibold text-[#2F4A40]">Photography</h3>
              <ul class="mt-2 space-y-2 text-[#3E5A4F]">
                <li>• Soft natural light; window light preferred.</li>
                <li>• Solitary moments with tea; hands, steam, quiet scenes.</li>
                <li>• Tea sets on wood or linen; minimal props.</li>
                <li>• Subtle Asian inspiration without heavy tradition.</li>
              </ul>
            </div>

            <!-- Typography -->
            <div>
              <h3 class="text-xl font-semibold text-[#2F4A40]">Typography</h3>
              <p class="mt-2 text-[#3E5A4F]">
                Headings: elegant serif with relaxed line-height. Body: clean sans-serif for clarity and comfort.
              </p>
              <div class="mt-4 space-y-1">
                <p class="text-2xl font-serif text-[#1E2B26]">Serif Heading Example — Gentle & Poised</p>
                <p class="text-[#3E5A4F]">Sans-Serif Body Example — Clear, modern, and quiet to read.</p>
              </div>
            </div>
          </div>

          <!-- Tone & Branding -->
          <div class="mt-12">
            <h3 class="text-2xl font-serif text-[#1E2B26]">Tone & Branding</h3>
            <ul class="mt-4 space-y-2 text-[#3E5A4F]">
              <li>• Calm, caring, and modern. Avoid jargon; speak to one person directly.</li>
              <li>• Emphasize small rituals, personal space, and emotional steadiness.</li>
              <li>• Subtle cultural references; keep it minimal and inclusive.</li>
              <li>• Invite, don’t insist. Provide options and gentle guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="cta" aria-labelledby="cta-title" class="py-16 sm:py-24 bg-[#2F4A40] text-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10 items-center">
          <div class="md:col-span-2">
            <h2 id="cta-title" class="text-3xl sm:text-4xl font-serif">Begin Your One-Person Ritual</h2>
            <p class="mt-3 text-white/90">Choose a set that fits your hands. Pick one tea for the week. Show up for yourself.</p>
          </div>
          <div class="flex gap-3 md:justify-end">
            <a href="#tea-sets" class="inline-flex items-center justify-center bg-white text-[#2F4A40] px-5 py-3 rounded-full font-medium hover:bg-[#F2F5F2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Shop Tea Sets
            </a>
            <a href="#teas" class="inline-flex items-center justify-center border border-white/70 text-white px-5 py-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Browse Teas
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-[#E6E9E4]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div class="flex items-center gap-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8DF] text-[#2B4238] font-semibold">一</span>
              <span class="text-lg font-semibold">Yi Ren <span class="text-[#6A7F75]">(一人)</span></span>
            </div>
            <p class="mt-2 text-sm text-[#6A7F75]">Serve Your Own Space.</p>
          </div>
          <nav aria-label="Footer" class="flex items-center gap-6">
            <a href="#tea-sets" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Shop</a>
            <a href="#events" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Events</a>
            <a href="#story" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">About</a>
          </nav>
          <div class="flex items-center gap-2" aria-label="Social media">
            <a href="#" class="h-9 w-9 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="Instagram">IG</a>
            <a href="#" class="h-9 w-9 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="TikTok">TT</a>
            <a href="#" class="h-9 w-9 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="YouTube">YT</a>
          </div>
        </div>
        <p class="mt-6 text-xs text-[#8C7D73]">© {{ new Date().getFullYear() }} Yi Ren. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  event: ''
})

const errors = reactive({
  name: '',
  email: '',
  event: ''
})

const liveMessage = ref('')

function validate() {
  errors.name = ''
  errors.email = ''
  errors.event = ''
  let ok = true

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
    ok = false
  }

  const email = form.email.trim()
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    errors.email = 'Please enter a valid email address.'
    ok = false
  }

  if (!form.event) {
    errors.event = 'Please select an event.'
    ok = false
  }

  return ok
}

function handleSubmit() {
  if (validate()) {
    liveMessage.value = 'Thank you! Your request has been received.'
    // reset
    form.name = ''
    form.email = ''
    form.event = ''
  } else {
    liveMessage.value = 'Please fix the highlighted fields.'
  }
}
</script>

<style scoped>
#hero-atmosphere{
  width: 100%;
}
</style>
<script lang="ts">
  import HomeFacts from '$lib/components/HomeFacts.svelte'
  import HomeLiveCounts from '$lib/components/HomeLiveCounts.svelte'
  import ExamineTopics from '$lib/components/ExamineTopics.svelte'
  import HomeCategories from '$lib/components/HomeCategories.svelte'
  import FA from 'svelte-fa'
  import {
    faMagnifyingGlassChart,
    faMoneyBills,
    faBuildingColumns,
    faCircleNodes
  } from '@fortawesome/free-solid-svg-icons'
</script>

<main class="space-y-10">
  <section class="hero min-h-[28em]">
    <div class="hero-content text-left">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold">We fight fake news and support data-driven politics</h1>
        <p class="py-6">Prepare your political meetings an create insights about topics with the political database</p>
        <div class="form-control">
          <div class="input-group w-full mx-auto">
            <button class="btn btn-lg btn-square">
              <img src="/../../icons/search.svg" alt="" />
            </button>
            <input
              type="text"
              class="input input-bordered w-full input-lg text-xl"
              placeholder="On which topic do you want to prepare data"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex flex-wrap items-center justify-center min-h-[6rem] gap-2 overflow-x-hidden">
    <div class="bg-white stats stats-vertical md:stats-horizontal shadow">
      <HomeLiveCounts count={1618907} title="Datasets" description="European public sector datasets" />
      <HomeLiveCounts count={176} title="Catalogues" description="Datasets grouped by category" />
      <HomeLiveCounts count={36} title="Countries" description="Explore datasets by country" />
      <HomeLiveCounts count={1383} title="News places" description="News related to open data" />
      <HomeLiveCounts count={193} title="Data stories" description="Inspiring stories about open-data" />
    </div>
  </section>
  <section class="flex flex-wrap items-center justify-center overflow-x-hidden p-10 gap-4 container mx-auto">
    <div class="stats stats-vertical md:stats-horizontal max-w-4xl text-center">
      <HomeFacts
        title="We analyze thousands of studies"
        description="Our database allow every stakeholdr within society to make data-driven desicion based on scientific data-facts"
        ><FA icon={faMagnifyingGlassChart} color="var(--clr-primary-400)" /></HomeFacts
      >
      <HomeFacts
        title="Linking the Open Data Community"
        description="We combine all the Open Data Platform in one to genrated individual reports on topics"
        ><FA icon={faCircleNodes} color="var(--clr-primary-400)" /></HomeFacts
      >
      <HomeFacts
        title="Trust in data with institutional approval"
        description="Millions of readers rely on our objectivity. No ads, sponsorships, or industry ties."
        ><FA icon={faBuildingColumns} color="var(--clr-primary-400)" /></HomeFacts
      >
    </div>
  </section>
  <section class="topics-container bg-white max-w-3xl mx-auto grid grid-cols-none md:grid-cols-2 gap-3 border-box p-3">
    <HomeCategories title="Offentliche Verwaltung und Finanzen" />
    <HomeCategories title="Staatsburgerschaft" />
    <HomeCategories title="Kommer und Tourismus" />
    <HomeCategories title="Kultur" />
    <HomeCategories title="Umwelt" />
    <HomeCategories title="Ausrustung, Dienstung, Soziales" />
    <HomeCategories title="Mobilitat und offentlicher Raum" />
    <HomeCategories title="Stadtplanung und Wohen" />
  </section>
  <section class="bg-white py-14">
    <div class="max-w-5xl mx-auto space-y-14">
      <div class="examine--heading text-center">
        <h2 class="text-2xl">Explore Examine</h2>
        <p class="text-sm">
          OpenSocietyDatabase is structured around 25 broad categories, containing hundreds of evaluations of data
          points using the available evidence. Each category is divided into subtopics, which are then
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 max-w-xs md:max-w-3xl mx-auto gap-4">
        <ExamineTopics name="Health" subTopics={['Healthcare', 'Mental Health', 'Health Insurance']} />
        <ExamineTopics name="Housing" subTopics={['Housing', 'Homelessness', 'Renting']} />
        <ExamineTopics name="Education" subTopics={['Schools', 'Universities', 'Student Loans']} />
        <ExamineTopics name="Immigration" subTopics={['Migration', 'Refugees', 'Asylum Seekers']} />
      </div>
    </div>
  </section>
</main>

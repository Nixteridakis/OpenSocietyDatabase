<script lang="ts">
  import HomeFacts from '$lib/components/HomeFacts.svelte'
  import HomeLiveCounts from '$lib/components/HomeLiveCounts.svelte'
  import ExamineTopics from '$lib/components/ExamineTopics.svelte'
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
    <div class="stats max-w-4xl text-center">
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
  <section class="container topics-container">
    <div class="topic-teasers">
      <FA icon={faMoneyBills} color="var(--clr-primary-400)" />
      <h3>Offentliche Verwaltung und Finanzen</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Staatsburgerschaft</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Kommer und Tourismus</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Kultur</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Umwelt</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Ausrustung, Dienstung, Soziales</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>Mobilitat und offentlicher Raum</h3>
    </div>
    <div class="topic-teasers">
      <FA icon={faBuildingColumns} color="var(--clr-primary-400)" />
      <h3>"Stadtplanung und Wohen"</h3>
    </div>
  </section>
  <section class="container-fluid examine">
    <div class="container">
      <div class="examine--heading">
        <h2>Explore Examine</h2>
        <p>
          Examine is structured around 25 broad health categories, containing hundreds of conditions, Interventiosn
          (like supplements and diets) are studied for measurable changes in specific outcomes
        </p>
      </div>
      <div class="grid">
        <ExamineTopics name="Conditions" subTopics={['Anxiety', 'Insomnia', 'Multiple Sclerosis']} />
        <ExamineTopics name="Interventions" subTopics={['Ashwagandha', 'Creatine', 'Fish Oil']} />
        <ExamineTopics name="Outcomes" subTopics={['Blood Glucose', 'Blood Pressure', 'Testosterone']} />
        <ExamineTopics name="Categories" subTopics={['Brain Health', 'Fat Loss', 'Muscle Gain & Excercise']} />
      </div>
    </div>
  </section>
</main>

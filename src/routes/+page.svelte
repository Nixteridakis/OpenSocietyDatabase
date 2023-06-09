<script lang="ts">
  import HomeFacts from '$lib/components/HomeFacts.svelte'
  import HomeLiveCounts from '$lib/components/HomeLiveCounts.svelte'
  import TopicTeasers from '$lib/components/TopicTeasers.svelte'
  import ExamineTopics from '$lib/components/ExamineTopics.svelte'
  import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
  import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'
  import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
  import FA from 'svelte-fa'
</script>

<main>
  <section class="hero-section">
    <h1>We fight fake news and support data-driven politics</h1>
    <p>Prepar your political meetings an create insights about topics with the political database</p>
    <div class="search">
      <input type="text" placeholder="On which topic do you want to prepare data" />
      <button>
        <img src="/../../icons/search.svg" alt="" />
      </button>
    </div>
  </section>
  <section class="container">
    <div class="grid">
      <HomeLiveCounts count={1618907} title="Datasets" description="European public sector datasets" />
      <HomeLiveCounts count={176} title="Catalogues" description="Datasets grouped by category" />
      <HomeLiveCounts count={36} title="Countries" description="Explore datasets by country" />
      <HomeLiveCounts count={1383} title="News places" description="News related to open data" />
      <HomeLiveCounts count={193} title="Data stories" description="Inspiring stories about open-data" />
      <HomeLiveCounts count={11} title="Course" description="Learning material on open data" />
    </div>
  </section>
  <section class="container">
    <div class="grid">
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
  <section class="container">
    <div class="container"><TopicTeasers svg="../../icons/..." title="Offentliche Verwaltung und Finanzen" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Staatsburgerschaft" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Kommer und Tourismus" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Kultur" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Umwelt" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Ausrustung, Dienstung, Soziales" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Mobilitat und offentlicher Raum" /></div>
    <div class="container"><TopicTeasers svg="../../icons/..." title="Stadtplanung und Wohen" /></div>
  </section>
  <section class="container">
    <h2>Explore Examine</h2>
    <p>
      Examine is structured around 25 broad health categories, containing hundreds of conditions, Interventiosn (like
      supplements and diets) are studied for measurable changes in specific outcomes
    </p>
    <ExamineTopics name="Interventions" subTopics={['Ashwagandha', 'Creatine', 'Fish Oil']} />
    <ExamineTopics name="Outcomes" subTopics={['Blood Glucose', 'Blood Pressure', 'Testosterone']} />
    <ExamineTopics name="Categories" subTopics={['Brain Health', 'Fat Loss', 'Muscle Gain & Excercise']} />
  </section>
</main>

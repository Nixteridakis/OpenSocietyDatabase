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

<style>
  .topics-container {
    display: grid;
    grid-template-columns: (1fr);
    gap: 0.5em;
    padding: 0.5em;
  }
  @media (min-width: 768px) {
    .topics-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (prefers-color-scheme: light) {
    .topics-container {
      background-color: white;
    }
  }
  .topic-teasers {
    display: flex;
    padding: 1rem;
    background-color: var(--clr-primary-100);
  }
  .topic-teasers h3 {
    font-size: 1em;
    margin: 0 0 0 1rem;
  }
  .examine {
    padding: var(--block-spacing-vertical) 0E;
    background-color: #fff;
  }
  .examine--heading {
    text-align: center;
  }
</style>

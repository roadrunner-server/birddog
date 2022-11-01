<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-header d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <div class="mr-3">
          <UIIconsPlugin style="width: 25px; height: 25px" />
        </div>
        <h5 class="mb-0">
          <NuxtLink :to="`/plugin/${plugin.name}`" v-if="hasSettings()">
            {{ plugin.name.capitalize() }} plugin
          </NuxtLink>
          <span v-else>{{ plugin.name.capitalize() }} plugin</span>
        </h5>
      </div>
      <div class="d-flex align-items-center">
        <span class="badge badge-light border mr-2">
          Workers: <strong>{{ plugin.workers.length }}</strong>
        </span>
        <button type="button" class="btn btn-sm btn-danger ml-2" @click="reset" v-if="plugin.is_ressetable">
          Restart
        </button>
      </div>
    </div>

    <div class="list-group list-group-flush" v-if="hasWorkers">
      <PluginsWorker v-for="worker in sortedWorkers" :worker="worker" :key="worker.pid"/>
    </div>
    <UIWarningMessage v-else>
      There are no run workers.
    </UIWarningMessage>
  </div>
</template>

<script>
export default {
  props: {
    server: String,
    plugin: Object
  },
  data() {
    return {
      loading: false,
      settings: ['jobs', 'service']
    }
  },
  methods: {
    hasSettings() {
      return this.settings.indexOf(this.plugin.name) > -1
    },
    async reset() {
      this.loading = true
      await this.$api.plugins.reset(this.server, this.plugin.name)
      this.loading = false

      this.$emit('reset')
    }
  },
  computed: {
    hasWorkers() {
      return this.plugin.workers.length > 0
    },
    sortedWorkers() {
      return this.plugin.workers
    }
  }
}
</script>
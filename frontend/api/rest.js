// Servers
const serversList = ({$axios}) => async () => $axios.$get('/servers')
  .then((response) => {
    return {
      servers: response.data.servers,
      default: response.default
    }
  })

// Plugins
const pluginsList = ({$axios}) => async (server) => $axios.$get(`/plugins?server=${server}`)
  .then((response) => response.data.plugins)

const pluginReset = ({$axios}) => async (server, plugin) => $axios.$post(`/plugin/reset`, {server, plugin})
  .then((response) => response.status)

// Jobs
const jobsPipelines = ({$axios}) => async (server) => $axios.$get(`/jobs/pipelines?server=${server}`)
  .then((response) => response.pipelines)

const jobsPipelinePause = ({$axios}) => async (server, pipeline) => $axios.$post(`/jobs/pipeline/pause`, {
  server,
  pipeline
})
  .then((response) => response.status)

const jobsPipelineResume = ({$axios}) => async (server, pipeline) => $axios.$post(`/jobs/pipeline/resume`, {
  server,
  pipeline
})
  .then((response) => response.status)

// Services
const servicesList = ({$axios}) => async (server) => $axios.$get(`/services?server=${server}`)
  .then((response) => response.data.services)

const serviceStatus = ({$axios}) => async (server, service) => $axios.$get(`/service/status?server=${server}&service=${service}`)
  .then((response) => response.data.statuses)

const servicesTerminate = ({$axios}) => async (server, service) => $axios.$post(`/service/terminate`, {server, service})
const servicesRestart = ({$axios}) => async (server, service) => $axios.$post(`/service/restart`, {server, service})

export default {
  serversList,
  pluginsList,
  pluginReset,
  jobsPipelines,
  jobsPipelinePause,
  jobsPipelineResume,
  servicesList,
  servicesTerminate,
  servicesRestart,
  serviceStatus
}
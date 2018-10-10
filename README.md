# vue-default-sh-template

Default Vue 2.x template.

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) template with webpack, hot-reload, lint-on-save, unit testing & css extraction.

## Install

```bash
vue init ddosdor/vue-sh-default-template my-project
```

## About this template

### Included dependencies
- [Vue-Router](https://github.com/vuejs/vue-router)
- [ElementUi](https://github.com/ElemeFE/element)
- [Vue MQ](https://github.com/AlexandreBonaventure/vue-mq)
- [Vuex](https://github.com/vuejs/vuex)

### Folder structure
- **\___mocks\___** - some mocks for unit tests
- **\___tests\___** - all unit tests
- **src/assets** - all assets for project (styles, images etc)
- **src/assets/styles** - default styles with necessary mixins (SASS)
- **src/components** - all components
- **src/config** - all configs for project (api, handlers for interceptors etc.)
- **src/lang** - files with translation
- **src/plugins** - folder with Vue plugins
- **src/router** - configuration for Vue-Router and all routes
- **src/store** - configuration for Vuex and all Vuex modules
- **src/utils** - some helpers etc.
- **src/views** - all views for Vue-Router

### Included plugins
- **ShI18n** - plugin that allows you to dynamically load translations 
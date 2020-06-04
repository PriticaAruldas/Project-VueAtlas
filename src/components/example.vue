<template>
  <va-app
    bg-color="#F4F5F7"
    page-bg-color="#FFFFFF"
    desktop-margin="0"
    desktop-minimum-width="0"
    desktop-sidebar-width="220"
    desktop-minibar-width="55"
    desktop-topbar-height="0"
    mobile-sidebar-width="0"
    mobile-minibar-width="0"
    mobile-topbar-height="50"
    :rtl="false"
    :reverse="false"
    :split="false"
    :sidebar-priority="false"
    :minibar-priority="false"
    :topbar-priority="false"
    :topbar-padded="false">

    <!-- https://vue-atlas.com/documentation/topbar -->
    <va-topbar theme="dark">
      <div slot="left"> L </div>
      <div slot="center"> C </div>
      <div slot="right"> R </div>
    </va-topbar>

    <!-- https://vue-atlas.com/documentation/minibar -->
    <va-minibar
      :top-items="[{icon:'home'},{icon:'search'},{icon:'user'}]"
      :bottom-items="[{icon:'question'}]"
      theme="dark" />

    <!-- https://vue-atlas.com/documentation/sidebar -->
    <va-sidebar
      theme="default"
      :compact="false"
      :text-links="false">
      <va-sidebar-group
        :items="[{name:'Item1'}]"
        title="Category 1"
        :show-toggle="false" />
      <va-sidebar-group
        :items="[{name:'Item1'}]"
        title="Category 2"
        :show-toggle="false" />
    </va-sidebar>

    <!-- https://vue-atlas.com/documentation/page -->
    <va-page size="lg">
     <va-button @click="$refs.myAside.open()">Open</va-button>

     <va-aside :placement="placement" ref="myAside">
        <div style="padding:20px;">Hello, world.</div>
     </va-aside>
     <va-badge :type="type">42</va-badge>
     <va-badge type="success">92</va-badge>
     <va-button type="default" size="lg" :active="active" :disabled="disabled" :block="block" :loading="loading" :focused="focused">button1</va-button>

    <va-breadcrumb separator="/">
    <va-breadcrumb-item to="/">altas</va-breadcrumb-item>
    <va-breadcrumb-item to="/example">Documents</va-breadcrumb-item>
    <va-breadcrumb-item to="/footer">breadcrumb</va-breadcrumb-item>
    </va-breadcrumb>

    <va-card :elevation="elevation" :padding="padding">
      <!-- <va-button type="default">Button</va-button> -->
      <div slot="topLeft">Left</div>
  <div slot="topRight">Right</div>
  Content
    <va-checkbox v-model="loading" :disabled="disabled">loading</va-checkbox>
    <va-button :loading="loading">Loading</va-button>
    </va-card>
    <va-collapse :accordion="accordion">
      <va-collapse-panel open header="panel 1">
        <p>Hie i am vue atlas UI Library</p>
      </va-collapse-panel>
    </va-collapse>
    <va-input v-model="inputText" />
    <va-color-picker :color="color" @change="onChange" />
    <va-datepicker v-model="date" :autoclose="autoclose" :format="format" :disabled="disabled"/>

    <va-dropdown effect="fadeLeft" :click-close="clickclose">
      <div slot="trigger">
        <va-button>Trigger</va-button>
      </div>
      <va-card>
        <p>Hie everyone</p>
      </va-card>
    </va-dropdown>

    <va-dropdown effect="fadeUp">
      <div slot="trigger">
        <va-button icon-after="angle-down">Planets</va-button>
      </div>
      <li><a href="#">Earth</a></li>
      <hr>
      <li><a href="#">Venus</a></li>
      <hr>
      <li><a href="#">Mars</a></li>
      <hr>
      <li><a href="#">Saturn</a></li>
      <hr>
      <li><a href="#">Jupiter</a></li>

    </va-dropdown>

    <va-input autofocus :clearable="clearable" @change="onChange"></va-input>

    <va-select v-model="inputWidth" placeholder="input width">
      <va-option value="xs" label="Extra Small"></va-option>
      <va-option value="sm" label="Small"></va-option>
      <va-option value="md" label="Medium"></va-option>
      <va-option value="lg" label="Large"></va-option>
      <va-option value="xl" label="Extra Large"></va-option>
      <va-option value="150px" label="150px"></va-option>
    </va-select>
    <va-input :width="inputWidth"></va-input>

    <va-input icon="user"
  :clearable="clearable"
  @change="onChange"
  placeholder="Placeholder"></va-input>

  <va-input :clearable="clearable" :loading="loading" buttons placeholder="Change input" @confirm="inputConfirm" @cancel="inputCancel" v-model="inputText"></va-input>
   <va-input prefix="prefix" :clearable="clearable" />
<va-input postfix="postfix" :clearable="clearable" />
<va-input prefix="$" postfix=".00 USD" icon="money-bill-alt" :clearable="clearable" />

<va-checkbox v-model="toggled">toggled</va-checkbox>
<va-loading v-if="toggled" size="md" color="yellow" center></va-loading>
<va-lozenge uppercase="uppercase" type="primary">Primary</va-lozenge>
<va-lozenge uppercase="uppercase" type="success" bold size="lg">Success</va-lozenge>
<va-button @click="showStandard">Open</va-button>
<va-modal title="Modal title" :width="width" ref="standardModal" :backdrop-clickable="backdropClickable" @confirm="standardOnConfirm" @hide="standardOnHide" @show="standardOnShow">
  <div slot="body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis ipsum
      minus aspernatur maiores totam.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Officiis molestias et omnis ipsum, nostrum eum repellat consequuntur nisi,
      facere iste eaque ducimus commodi nemo, earum aliquam impedit magnam voluptate quis.
    </p>
  </div>
</va-modal>
<va-button @click="showDanger">Danger notification</va-button>
<p>
    <div
    v-for="(item, index) in activePagedItems"
    :key="index"
    v-html="item"></div>
<p/>
<p>
  <va-pagination
    :total="pagedItems.length"
    :max="max"
    @change="pagedItemsChange"
    :per-page="perPage">
  </va-pagination>
</p>
    </va-page>

  </va-app>
</template>

<script>
export default {
  data () {
    let pagedItems = []
    for (let i = 0; i < 150; i++) {
      pagedItems.push(i + 1)
    }
    return {
      // offset: 150
      placement: 'right',
      type: 'default',
      active: true,
      // disabled: true,
      // block: true,
      loading: false,
      focused: true,
      elevation: 3,
      padding: 5,
      disabled: false,
      accordion: false,
      open: false,
      color: '#6f00ff',
      inputText: '',
      date: new Date(),
      autoclose: true,
      format: 'MM/dd/yyyy',
      clickclose: false,
      clearable: false,
      inputWidth: '',
      toggled: false,
      uppercase: true,
      duration: 3000,
      max: 5,
      perPage: 10,
      pagedItems: pagedItems,
      activePagedItems: []
    }
  },
  methods: {
    onChange () {
      console.log('changed')
    },
    inputConfirm () {
      this.loading = true
      console.log('done something with input', this.inputText)
      setTimeout(() => {
        this.loading = false
        console.log('Finished doing something. Setting loading to false so that the input operation buttons know to disappear.')
      }, 1000)
    },
    inputCancel () {
      console.log('cancelled')
    },
    showStandard () {
      this.$refs.standardModal.open()
    },
    standardOnConfirm () {
      console.log('Confirm event received. Do stuff, then close the modal.')
      this.$refs.standardModal.close()
    },
    standardOnHide () {
      console.log('Standard modal hidden')
    },
    standardOnShow () {
      console.log('Standard modal shown')
    },
    showDanger () {
      this.notification.danger({
        title: `Change default MySQL password to something other than 'root'`,
        message: `For security reasons, make sure you change the password of the MySQL
        user 'root' to something other than 'root' when you publish this application.<br/>
        <br/>
        <br/>
        <a href='#'>Instructions</a>`,
        duration: this.duration
      })
    },
    pagedItemsChange (e) {
      this.activePagedItems.splice(0, this.activePagedItems.length)
      let start = e.perPage * (e.pageNumber - 1)
      let end = start + e.perPage
      if (end > this.pagedItems.length) {
        end = this.pagedItems.length
      }
      for (let i = start; i < end; i++) {
        this.activePagedItems.push(this.pagedItems[i])
      }
    }
  }
}
</script>

<style scoped>

</style>

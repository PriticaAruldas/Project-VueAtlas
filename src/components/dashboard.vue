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
    <va-topbar theme="blue">
      <div slot="left"> L </div>
      <div slot="center"> C </div>
      <div slot="right"> R </div>
    </va-topbar>

    <!-- https://vue-atlas.com/documentation/minibar -->
    <va-minibar
      :top-items="[{icon:'home'},{icon:'search'},{icon:'user'}]"
      :bottom-items="[{icon:'question'}]"
      theme="blue" />

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
        <va-page-header>
            <div slot="title">
                <span>Page title</span>
            </div>

            <div slot="subtitle">
                <span>Subtitle</span>
            </div>
        </va-page-header>

        <va-tabs @changed="onTabChange" :cache-lifetime="cacheLifetime">
            <va-tab name="Dashboard">
                <div class="demoTabContent">
                    <va-card :elevation="elevation" :padding="padding">
                    <va-collapse :accordion="accordion">
                        <va-collapse-panel open header="Classes">
                            <va-select v-model="simpleValue" placeholder="Pick one" no-uncheck style="padding:10px">
                                <va-option value="one" label="1"></va-option>
                                <va-option value="two" label="2"></va-option>
                                <va-option value="three" label="3">Third</va-option>
                            </va-select>
                        </va-collapse-panel>
                        </va-collapse>
                    </va-card>
                    <br>
                    <va-card :elevation="elevation" :padding="padding">
                    <va-collapse :accordion="accordion">
                        <va-collapse-panel open header="Courses">
                            <va-select v-model="simpleValue" placeholder="Pick one" no-uncheck style="padding:10px">
                                <va-option value="Github" label="Github"></va-option>
                                <va-option value="Technical writing" label="Technical writing"></va-option>
                                <va-option value="Firebase" label="Firebase"></va-option>
                            </va-select>
                        </va-collapse-panel>
                        </va-collapse>
                    </va-card>
                    <br>
                    <va-card :elevation="elevation" :padding="padding">
                    <va-collapse :accordion="accordion">
                        <va-collapse-panel open header="Courses">
                            <va-select v-model="simpleValue" placeholder="Pick one" no-uncheck style="padding:10px">
                                <va-option value="Jeet" label="Jeet"></va-option>
                                <va-option value="Hemal" label="Hemal"></va-option>
                                <va-option value="Vedantika" label="Vedantika"></va-option>
                            </va-select>
                        </va-collapse-panel>
                        </va-collapse>
                    </va-card>
                    <!-- <va-card :elevation="elevation" :padding="padding">
                    <va-collapse :accordion="accordion">
                        <va-collapse-panel open header="Teachers">
                            <va-select v-model="simpleValue" placeholder="Pick one" no-uncheck style="padding:10px">
                                <va-option value="Jeet" label="Jeet"></va-option>
                                <va-option value="Hemal" label="Hemal"></va-option>
                                <va-option value="Vedantika" label="Vedantika"></va-option>
                            </va-select>
                        </va-collapse-panel>
                        </va-collapse>
                    </va-card> -->
                        <!-- <va-collapse-panel header="Courses"> ... </va-collapse-panel>
                        <va-collapse-panel header="Teachers"> ... </va-collapse-panel> -->
                </div>
            </va-tab>
            <va-tab name="Classes">
               <div class="demoTabContent">
                </div>
            </va-tab>
            <va-tab name="Courses">
                <div>
                     <va-row>
            <div>
                <va-button type="subtle" style="padding:5px" @click="showStandard">
                    <!-- <va-icon type="plus-square" icon-style="regular" margin="0 7px 0 0"></va-icon> -->
                    <i class="fas fa-plus" style="padding:5px"></i>
                    Create Courses
                </va-button>
                <va-modal title="Courses" width="600px" ref="standardModal" :backdrop-clickable="backdropClickable" @confirm="standardOnConfirm" @hide="standardOnHide" @show="standardOnShow">
                    <div slot="body">
                        <va-form>
                            <va-form-item label="Enter Course Name">
                                <va-input v-model="coursename" :clearable="clearable" @change="onChange" placeholder="Course Name"></va-input>
                            </va-form-item>
                        </va-form>
                    </div>
                    <div slot="footer">
                        <va-button type="primary" @click="addcourse">Save</va-button>
                        <va-button type="default"  @click="standardOnConfirm">Close</va-button>
                    </div>
                </va-modal>
            </div>
        </va-row>
                </div>
            </va-tab>
        </va-tabs>
    </va-page>

</va-app>
</template>
<script>
export default {
  data () {
    return {
      cacheLifetime: 5,
      accordion: true,
      backdropClickable: true,
      coursename: '',
      courses: [],
      padding: 5,
      elevation: 3
    }
  },
  methods: {
    showStandard () {
      this.$refs.standardModal.open()
    },
    standardOnConfirm () {
    //   console.log('Confirm event received. Do stuff, then close the modal.')
      this.$refs.standardModal.close()
    },
    // standardOnHide () {
    //   console.log('Standard modal hidden')
    // },
    // standardOnShow () {
    //   console.log('Standard modal shown')
    // },
    addcourse () {
      this.courses.push({
        coursename: this.coursename
      })
      this.coursename = ''
    }
  }
}
</script>

<style scoped>
.demoTabContent {
  /* margin-top: 10px;
  background: rgb(233, 234, 237);
  border-radius: 5px;
  padding: 40px 20px;
  font-size: 20px;
  font-weight: 500; */
  padding: 10px;
}
</style>

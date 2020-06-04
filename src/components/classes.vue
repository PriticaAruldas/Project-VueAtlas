<template>
 <va-app
    bg-color="#F4F5F7"
    page-bg-color="#FFFFFF"
    desktop-margin="0"
    desktop-minimum-width="0"
    desktop-sidebar-width="200"
    desktop-minibar-width="0"
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
    <!-- <va-minibar
      :top-items="[{icon:'home'},{icon:'search'},{icon:'user'}]"
      :bottom-items="[{icon:'question'}]"
      theme="blue" /> -->

    <!-- https://vue-atlas.com/documentation/sidebar -->
    <va-sidebar
      theme="default"
      :compact="false"
      :text-links="false">
      <va-sidebar-group
        :items="[{name:'Classes'}]"
        title="create class"
        :show-toggle="false" />
      <va-sidebar-group
        :items="[{name:'Courses'}]"
        title="Add Course"
        :show-toggle="false" />
    </va-sidebar>

    <!-- https://vue-atlas.com/documentation/page -->
    <va-page size="lg">
        <va-page-header>
            <div slot="breadcrumb">
                <va-breadcrumb separator="/">
                    <va-breadcrumb-item to="/">Courses</va-breadcrumb-item>
                    <va-breadcrumb-item to="/">Add Course</va-breadcrumb-item>
                </va-breadcrumb>
            </div>
            <div slot="title">
                <span>Courses</span>
            </div>
        </va-page-header>
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
    </va-page>

  </va-app>
</template>

<script>
export default {
  data () {
    return {
      backdropClickable: true,
      coursename: '',
      courses: []
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

<style>

</style>

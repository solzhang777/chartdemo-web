<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="active treeview menu-open">
          <ul class="treeview-menu">
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/1')">
                <i class="fa fa-fw fa-edit"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/2')">
                <i class="fa fa-fw fa-users"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/3')">
                <i class="fa fa-fw fa-bullhorn"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat"  @click="forward('/chart/4')">
                <i class="fa fa-fw fa-envelope"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat"  @click="forward('/chart/5')">
                <i class="fa fa-fw fa-object-ungroup"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/6')">
                <i class="fa fa-fw fa-map"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/7')">
                <i class="fa fa-fw fa-map"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/8')">
                <i class="fa fa-fw fa-map"></i>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-default btn-flat" @click="forward('/chart/9')">
                <i class="fa fa-fw fa-map"></i>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
  public forward(path: string) {
    this.$router.push(path);
  }
}
</script>

<style lang="scss">
.skin-blue {
  .main-sidebar {
    width: 46px;
    background-color: #3c8dbc;
    li {
      .active {
        a {
          background-color: #3c8dbc;
        }
      }
    }
  }

  .sidebar-menu {
    background-color: #3c8dbc;
    li {
      .menu-open {
        a {
          background-color: #3c8dbc;
        }
      }
    }
  }

  .treeview-menu {
    margin: 0px;
    padding: 0px;
    li {
      background-color: #3c8dbc;
    }
  }
}
</style>




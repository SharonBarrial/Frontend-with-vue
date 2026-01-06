<script>
import {Supply} from "../models/supply.entity.js";
import {SupplyControlApiService} from "../services/supply-control-api.service.js";
import DataManager from "../../shared/components/data-manager.component.vue";
import SupplyItemCreateAndEditDialog from "../components/supply-item-create-and-edit-dialog.component.vue";

export default {
  name: "supply-management",
  components: {SupplyItemCreateAndEditDialog, DataManager},
  data(){
    return {
      title: { singular: 'Supply', plural: 'Supplies' },
      supplies: [],
      supply: { },
      selectedSupplies: [],
      supplyControlService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false
    }
  },
  methods: {
    //#region Helper Methods
    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },
    findIndexById(id) {
      return this.supplies.findIndex((supply) => supply.id === id);
    },

    //#region Data Manager Event Handlers
    onNewItemEventHandler() {
      this.supply = { };
      this.submitted = false;
      this.isEdit = false;
      this.createAndEditDialogIsVisible = true;
    },
    onEditItemEventHandler(item) {
      this.supply = item;
      this.submitted = false;
      this.isEdit = true;
      this.createAndEditDialogIsVisible = true;
    },
    onDeleteItemEventHandler(item) {
      this.supply = item;
      this.deleteSupply();
    },
    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedSupplies = selectedItems;
      this.deleteSelectedSupplies();
    },


    //#region Tutorial Item Create and Edit Dialog Event Handlers
    onCanceledEventHandler() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },
    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.supply.product.trim()) {
        if (item.id) {
          this.updateSupply();
        } else {
          this.createSupply();
        }
      }
      this.createAndEditDialogIsVisible = false;
      this.isEdit = false;
    },

    //#region Data Actions
    // Create a new item
    createSupply() {
      this.supply.id = 0;
      this.supply = Supply.fromDisplayableSupply(this.supply);
      this.supplyControlService.create(this.supply)
          .then((response) => {

            this.supply = Supply.toDisplayableSupply(response.data);
            this.supplies.push(this.supply);
            this.notifySuccessfulAction("Supply Created");
          });
    },
    // Update an existing item
    updateSupply() {

      this.supply = Supply.fromDisplayableSupply(this.supply);
      this.supplyControlService
          .update(this.supply.id, this.supply)
          .then((response) => {

            this.supplies[this.findIndexById(response.data.id)] =
                Supply.toDisplayableSupply(response.data);

            this.notifySuccessfulAction("Supply Updated");
          });
    },
    // Delete a item
    deleteSupply() {
      this.supplyControlService.delete(this.supply.id)
          .then(() => {
            this.supplies = this.supplies.filter((s) => s.id !== this.supply.id);
            this.supply = {};

            this.notifySuccessfulAction("Supply Deleted");
          });
    },

    // Delete selected tutorials
    deleteSelectedSupplies() {
      this.selectedSupplies.forEach((supply) => {
        this.supplyControlService.delete(supply.id).then(() => {
          this.supplies = this.supplies.filter((s) => s.id !== this.supply.id);
        });
      });

      this.notifySuccessfulAction("Supplies Deleted");
    }
  },
  created() {
    this.supplyControlService = new SupplyControlApiService();

    this.supplyControlService.getAll().then((response) => {
      this.supplies = response.data.map((supply) => Supply.toDisplayableSupply(supply));
    });
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Tutorial Data Manager -->
    <data-manager
      :title=title
      v-bind:items="supplies"
      v-on:new-item="onNewItemEventHandler"
      v-on:edit-item="onEditItemEventHandler($event)"
      v-on:delete-item="onDeleteItemEventHandler($event)"
      v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)">
      <template #custom-columns>
        <pv-column :sortable="true" field="id" header="Id" style="min-width: 12rem"/>
        <pv-column :sortable="true" field="product" header="Product" style="min-width: 16rem"/>
        <pv-column :sortable="true" field="quantity" header="Quantity" style="min-width: 16rem"/>
        <pv-column :sortable="true" field="address" header="Address" style="min-width: 16rem"/>
        <pv-column :sortable="true" field="expire" header="Expiration Date" style="min-width: 16rem"/>
      </template>
    </data-manager>
    <!-- Tutorial Item Create and Edit Dialog -->
    <supply-item-create-and-edit-dialog
      :item="supply"
      :edit="isEdit"
      :visible="createAndEditDialogIsVisible"
      v-on:canceled="onCanceledEventHandler"
      v-on:saved="onSavedEventHandler($event)"/>

  </div>
</template>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 960px) {
  :deep(.p-toolbar) {
    flex-wrap: wrap;
  }
}

@media (min-width: 1024px) {
  .tutorials {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
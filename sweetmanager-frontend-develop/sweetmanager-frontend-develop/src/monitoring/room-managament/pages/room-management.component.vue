<script>

import RoomItemCreateAndEditDialog from "../components/room-item-create-and-edit-dialog.component.vue";
import {RoomControlApiService} from "../services/room-control-api.service.js";
import {Room} from "../model/room.entity.js";
import DataManager from "../../../shared/components/data-manager.component.vue";

export default {
  name: "room-management",
  components: {DataManager, RoomItemCreateAndEditDialog},
  data() {
    return {
      title: { singular: 'Room', plural: 'Rooms' },
      rooms: [],
      room: { },
      selectedRooms: [],
      statuses: [{label: 'Not Busy', value: 'not busy'}, {label: 'Busy', value: 'busy'}],
      roomControlService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false
    }
  },
  methods: {

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    getSeverity(status) {
      switch (status) {
        case 'Busy': return 'success';
        case 'Bot Busy': return 'info';
        default:  return null;
      }
    },

    findIndexById(id) {
      return this.rooms.findIndex((room) => room.id === id);
    },

    onNewItemEventHandler() {
      this.room = { };
      this.submitted = false;
      this.isEdit = false;
      this.createAndEditDialogIsVisible = true;
    },

    onEditItemEventHandler(item) {
      this.room = item;
      this.submitted = false;
      this.isEdit = true;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.room = item;
      this.deleteRoom();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedRooms = selectedItems;
      this.deleteSelectedRooms();
    },

    onCanceledEventHandler() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.room.name.trim()) {
        if (item.id) {
          this.updateRoom();
        } else {
          this.createRoom();
        }
      }
      this.createAndEditDialogIsVisible = false;
      this.isEdit = false;
    },

    createRoom() {
      this.room.id = 0;
      this.room = Room.fromDisplayableRoom(this.room);
      this.roomControlService.create(this.room)
          .then((response) => {

            this.room = Room.toDisplayableRoom(response.data);
            this.rooms.push(this.room);
            this.notifySuccessfulAction("Room Created");
          });
    },

    updateRoom() {

      this.room = Room.fromDisplayableRoom(this.room);
      this.roomControlService
          .update(this.room.id, this.room)
          .then((response) => {

            this.rooms[this.findIndexById(response.data.id)] =
                Room.toDisplayableRoom(response.data);

            this.notifySuccessfulAction("Room Updated");
          });
    },

    deleteRoom() {

      this.roomControlService.delete(this.room.id)
          .then(() => {
            this.rooms = this.rooms.filter((r) => r.id !== this.room.id);
            this.room = {};

            this.notifySuccessfulAction("Room Deleted");
          });
    },

    deleteSelectedRooms() {
      this.selectedRooms.forEach((room) => {
        this.roomControlService.delete(room.id).then(() => {
          this.rooms = this.rooms.filter((r) => r.id !== this.room.id);
        });
      });

      this.notifySuccessfulAction("Rooms Deleted");
    }
  },
  created() {
    this.roomControlService = new RoomControlApiService();

    this.roomControlService.getAll().then((response) => {
      this.rooms = response.data.map((room) => Room.toDisplayableRoom(room));
    });
  }
}
</script>

<template>
  <div class="w-full">
    <data-manager
        :title=title
        v-bind:items="rooms"
        v-on:new-item="onNewItemEventHandler"
        v-on:edit-item="onEditItemEventHandler($event)"
        v-on:delete-item="onDeleteItemEventHandler($event)"
        v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)">
      <template #custom-columns>
        <pv-column :sortable="true" field="id"              header="Id"              style="min-width: 12rem"/>
        <pv-column :sortable="true" field="name"            header="Name"            style="min-width: 16rem"/>
        <pv-column :sortable="true" field="description"     header="Description"     style="min-width: 16rem"/>
        <pv-column :sortable="true" field="price"           header="Price"           style="min-width: 16rem"/>
        <pv-column :sortable="true" field="worker"          header="Worker"          style="min-width: 16rem"/>
        <pv-column :sortable="true" field="client"          header="Client"          style="min-width: 16rem"/>
        <pv-column :sortable="true" field="totalBeds"       header="TotalBeds"       style="min-width: 16rem"/>
        <pv-column :sortable="true" field="totalBathrooms"  header="TotalBathrooms"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="totalTelevision" header="TotalTelevision" style="min-width: 16rem"/>
        <pv-column :sortable="true" field="totalBeds"       header="TotalBeds"       style="min-width: 16rem"/>
        <pv-column :sortable="true" field="status"          header="Status"          style="min-width: 16rem">
          <template #body="slotProps">
            <pv-tag :severity="getSeverity(slotProps.data.status)" :value="slotProps.data.status"/>
          </template>
        </pv-column>
      </template>
    </data-manager>
    <room-item-create-and-edit-dialog
        :statuses="statuses"
        :item="room"
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
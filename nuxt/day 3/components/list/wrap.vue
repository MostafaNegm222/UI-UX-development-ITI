<script setup>
const { status, isData } = defineProps({
  status: {
    type: String,
    required: true,
  },
  isData: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <template v-if="status === 'success'">
      <template v-if="isData">
        <slot></slot>
      </template>
      <template v-else>
        <slot name="empty">
          <ListEmpty />
        </slot>
      </template>
    </template>
    <template v-else-if="status === 'pending'">
      <slot name="pending"><ListPending /></slot>
    </template>
    <template v-else>
      <slot name="error">
        <ListError />
      </slot>
    </template>
  </div>
</template>

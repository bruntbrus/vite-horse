<template>
  <div class="te-data-view" role="document">
    <Panel class="te-control-panel">
      <Form class="te-query-form" @submit="handleSubmit">
        <Fieldset>
          <Textarea name="query"
            :modelValue="query"
            class="te-query-input"
            placeholder="Enter query"
            :autoResize="false"
            autofocus
          />
        </Fieldset>
        <Fieldset>
          <Button type="submit" name="run" @click="handleRun">Run</Button>
          <Button type="reset" name="clear" @click="handleClear">Clear</Button>
        </Fieldset>
        <Fieldset>
          <InputText name="user"
            :modelValue="user"
            :maxLength="100"
            placeholder="Enter username"
          />
          <Password name="password"
            :modelValue="password"
            placeholder="Enter password"
          />
        </Fieldset>
        <Fieldset>
          <InputText name="host"
            :modelValue="host"
            :maxLength="100"
            placeholder="Enter hostname"
          />
          <InputNumber name="port"
            :modelValue="port"
            :maxLength="4"
            :min="0" :max="9999"
            :useGrouping="false"
            :maxFractionDigits="0"
            placeholder="Enter portnumber"
          />
        </Fieldset>
        <Fieldset>
          <InputText name="db"
            :modelValue="db"
            :maxLength="100"
            placeholder="Enter database name"
          />
        </Fieldset>
      </Form>
    </Panel>
    <DataTable :value="records" :autoLayout="true">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="true"
      ></Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
/*----------------------------------------------------------------------------*/

import { defineComponent } from 'vue'
import DataTable, { Column } from '../components/data/DataTable'
import Panel from '../components/panel/Panel'
import Fieldset from '../components/panel/Fieldset'
import Button from '../components/button/Button'
import Form from '../components/form/Form'
import Textarea from '../components/form/Textarea'
import InputText from '../components/form/InputText'
import InputNumber from '../components/form/InputNumber'
import Password from '../components/form/Password'

const DataView = defineComponent({
  name: 'DataView',
  components: {
    DataTable,
    Column,
    Panel,
    Fieldset,
    Button,
    Form,
    Textarea,
    InputText,
    InputNumber,
    Password,
  },
  data: () => ({
    query: '',
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    db: '',
    columns: [],
    records: [],
  }),
  methods: {
    handleQuerySubmit(event: Event) {
      event.preventDefault()
    },
  },
})

export default DataView

/*----------------------------------------------------------------------------*/
</script>

<style lang="scss">

.te-data-view {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .p-panel .p-panel-header {
    padding: 5px;
  }

  .te-query-form {
    .p-fieldset {
      float: left;
      padding: 0;
      margin-right: 10px;
    }

    .p-fieldset-legend {
      display: none;
    }

    .p-fieldset-content {
      padding: 0;
    }

    .te-query-input {
      width: 320px;
      height: 67px;
      resize: none;
    }

    .p-inputtext,
    .p-button {
      display: block;
      padding: 5px;
      margin-bottom: 7px;
      font-size: 14px;
    }

    .p-inputtext {
      font-family: Consolas, monospace;
    }

    .p-button {
      margin-bottom: 10px;
    }
  }

  .p-datatable {
    font-family: Consolas, monospace;

    .p-datatable-thead {
      & > tr > th {
        font-size: 0.9rem;
        background-color: var(--surface-500);
        padding: 5px;
      }
    }

    .p-datatable-tbody {
      & > tr > td {
        font-size: 0.8rem;
        padding: 5px;
      }

      & > tr:hover > td {
        background-color: var(--surface-300);
      }
    }
  }
}

</style>

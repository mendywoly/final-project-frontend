import React from 'react'
import { Card, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ItemExampleItems = (props) => (
  <div>
    <Card.Group>
      <Card>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Sku</Table.HeaderCell>
            <Table.HeaderCell>longest_side</Table.HeaderCell>
            <Table.HeaderCell>median_side</Table.HeaderCell>
            <Table.HeaderCell>shortest_side</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

         <Table.Body>
            <Table.Row>
              <Table.Cell>{props.f.sku}</Table.Cell>
              <Table.Cell>{props.f.longest_side}</Table.Cell>
              <Table.Cell>{props.f.median_side}</Table.Cell>
              <Table.Cell>{props.f.shortest_side}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </Card>
    </Card.Group>
  </div>
)
export default ItemExampleItems

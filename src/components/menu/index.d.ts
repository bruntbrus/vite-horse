/**
 * Menu-item interface that defines various options such as the label, icon and children of an item in a menu.
 */
export interface MenuItem {
  /** Style class. */
  class?: string
  /** Callback to execute when item is clicked. */
  command?: (event?: { item: MenuItem, originalEvent: Event }) => void
  /** When set as true, disables the item. Default: false */
  disabled?: boolean
  /** Icon class. */
  icon?: string
  /** Child items. */
  items?: MenuItem[]
  /** Unique identifier. */
  key?: string // object?
  /** Label text. */
  label?: string
  /** Defines the item as a separator. Default: false */
  separator?: boolean
  /** Inline style. */
  style?: Record<string, unknown>
  /** Specifies where to open the linked document. */
  target?: string
  /** Route configuration such as path, name and parameters. */
  to?: string
  /** External link to navigate when item is clicked. */
  url?: string
  /** A boolean or a function to return a boolean to specify if the item is visible. Default: true */
  visible?: boolean | (() => boolean)
}

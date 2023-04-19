import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Button, Toast, ToastProps, ToastProvider } from '@spica-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    open: false,
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} as Meta<ToastProps>

export const Default: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <Button
        variant="solid"
        size="md"
        onClick={() => updateArgs({ open: true })}
      >
        Open
      </Button>
      <Toast
        {...args}
        title="Agendamento realizado"
        onOpenChange={(open) => updateArgs({ open })}
      >
        Quarta-feira, 23 de Outubro às 16h
      </Toast>
    </ToastProvider>
  )
}

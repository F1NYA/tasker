import React from 'react'
import Modal from 'semantic-ui-react/dist/es/modules/Modal/Modal'
import { Form } from 'semantic-ui-react'
import Button from 'semantic-ui-react/dist/es/elements/Button/Button'
import TextArea from 'semantic-ui-react/dist/es/addons/TextArea/TextArea'

const initState = {
  title: '',
  text: '',
  open: false,
}

class CreateModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = initState
  }

  toggle = () => this.setState({open: !this.state.open})

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  render () {
    const {title, text, open} = this.state
    const {addTask} = this.props
    return (
      <Modal onClose={() => this.toggle()} open={open}
             trigger={<Button onClick={() => this.toggle()}>Create new</Button>}
             closeIcon>
        <Modal.Header>Create new task</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Form onSubmit={() => {
              addTask(this.state)
              this.toggle()
              this.setState(initState)
            }}>
              <Form.Input minLength={'5'} maxLength={'23'} value={title} onChange={this.handleChange.bind(this)}
                          name={'title'} label={'Task title'} required/>
              <Form.Field>
                <TextArea minLength={'5'} maxLength={''} value={text} onChange={this.handleChange.bind(this)}
                          name={'text'}
                          placeholder='Task text' required/>
              </Form.Field>
              <Button>Create</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CreateModal
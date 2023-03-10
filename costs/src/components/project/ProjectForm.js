import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectFrom({btnText}){
  return (
    <form className={styles.form}>
      <Input 
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input 
        type="Number"
        text="Orçamendo do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Seleciona a categoria"  />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectFrom
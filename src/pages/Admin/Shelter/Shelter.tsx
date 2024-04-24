import { Panel } from "../../../components/layout/Panel";
import { Input } from "../../../components/common/Input/Input";
import styles from './Shelter.module.css'
import { Button } from "../../../components/common/Button";

export function Shelter() {
    function submit(event) {
        event.
    }
    return (
        <form className={styles.container} onSubmit={submit}>
            <Panel>
            <Input label="Nome" value="PICLES VERDE"/>
            <Button type="submit">Salvar dados</Button>
        </Panel>
        </form>
        
    )
}
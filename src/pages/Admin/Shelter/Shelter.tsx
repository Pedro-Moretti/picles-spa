import { Panel } from "../../../components/layout/Panel";
import { Input } from "../../../components/common/Input/Input";
import styles from './Shelter.module.css'
import { Button } from "../../../components/common/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";

const shelterSchema = z.object({
    name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres.').max(30, 'Nome deve ter no máximo 30 caracteres.'),
    email: z.string().email('Campo deve ser um email.'),
    phone: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    }, 'Número deve ter entre 10 e 11 caracteres.'),
    whatsApp: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    },'Número deve ter entre 10 e 11 caracteres.'),
})

type ShelterSchema = z.infer<typeof shelterSchema>

export function Shelter() {
    const { handleSubmit, register, formState } = useForm<ShelterSchema>({
        resolver: zodResolver(shelterSchema),
    })
    const registerWithMask = useHookFormMask(register)

    function submit({ name, email, phone, whatsApp }: ShelterSchema) {
        console.log(name, email, phone, whatsApp)
    }

    return (
        <Panel>
            <form className={styles.container} onSubmit={handleSubmit(submit)}>
                <div>
                    <Input label="Nome" {...register('name')}/>
                    {formState.errors?.name && (
                        <p className={styles.formError}>{formState.errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Input label="Email" {...register('email')}/>
                    {formState.errors?.email && (
                        <p className={styles.formError}>{formState.errors.email.message}</p>
                    )}
                </div>
                <div>
                    <Input label="Telefone" {...registerWithMask('phone', ['(99) [9]9999-9999'])}/>
                    {formState.errors?.phone && (
                        <p className={styles.formError}>{formState.errors.phone.message}</p>
                    )}
                </div>
                <div>
                    <Input label="WhatsApp" {...registerWithMask('whatsApp', ['(99) [9]9999-9999'])}/>
                    {formState.errors?.whatsApp && (
                        <p className={styles.formError}>{formState.errors.whatsApp.message}</p>
                    )}
                </div>
                <Button type="submit">Salvar dados</Button>
            </form>
        </Panel>  
    )
}
import { useTranslation } from "react-i18next";


export default function RequireText(text){
    const { t } = useTranslation()
    return(
        t(text)
    )
}
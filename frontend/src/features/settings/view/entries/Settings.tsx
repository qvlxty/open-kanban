import { logout } from "@/features/login/model"
import { Icon } from "@/shared/ui"
import { useUnit } from "effector-react"
import { $currentTheme, Button, Dropdown, SettingRow, Settings, Switch, TabBar, toggleTheme } from "igoresha-dev-ui-kit"
import { useTranslation } from "react-i18next"

export const SettingsBase = () => {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'pages.settings'})
    const currentTheme = useUnit($currentTheme)
    return (
        <Settings
            titleIcon={<Icon icon='settings' size={28} />}
            title={t('title')}
        >
            <SettingRow
                icon={<Icon icon="lamp" />}
                title={t('theme')}
                option={<Switch checked={currentTheme === 'light'} onChange={toggleTheme} />}
            />
            <SettingRow
                icon={<Icon icon="language" />}
                title={t('language')}
                option={<Dropdown
                    onOptionChange={i18n.changeLanguage}
                    options={[
                        { value: 'ru', text: 'ru' },
                        { value: 'en', text: 'en' },
                    ]}
                    selected={i18n.language}
                />}
            />
            <SettingRow
                icon={<Icon icon='logout' />}
                title={t('logout')}
                option={<Button onClick={() => logout()} >{t('logout')}</Button>}
            />
        </Settings>
    )
}
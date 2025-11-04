import { sample } from "effector";
import { $isApploaded, loadApp } from "./public";
import { loadDalFx } from "@/dal/request";
import { loadAppFx } from "./private";
import { fetchUsersFx } from "@/features/users/model";
import { $isUserAuthorized } from "@/features/login/model";
import { loadThemeFx } from "igoresha-dev-ui-kit";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

$isApploaded
    .on(loadAppFx.done, () => true)

sample({
    clock: loadApp,
    target: loadAppFx
})


loadAppFx.use(async () => {
    await Promise.all([
        loadDalFx(),
        loadThemeFx(),
        i18n
            .use(Backend)
            .use(LanguageDetector)
            .use(initReactI18next)
            .init({
                fallbackLng: 'en',
                interpolation: {
                    escapeValue: false,
                }
            })
    ])
})

sample({
    clock: loadAppFx.done,
    filter: $isUserAuthorized,
    target: fetchUsersFx
})

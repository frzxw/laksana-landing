import { Outlet, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGUAGES = ['en', 'id'];

export function LanguageLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang && SUPPORTED_LANGUAGES.includes(lang)) {
            if (i18n.language !== lang) {
                i18n.changeLanguage(lang);
            }
        }
    }, [lang, i18n]);

    if (lang && !SUPPORTED_LANGUAGES.includes(lang)) {
        return <Navigate to={`/en`} replace />;
    }

    return <Outlet />;
}

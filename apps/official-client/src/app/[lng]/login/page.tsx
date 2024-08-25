'use client';

import { useClientTranslation } from '@/i18n';

export default function Login() {
  const { t } = useClientTranslation();
  return (
    <div className="w-full h-full p-4">
      <h3 className="font-semibold text-xl">{t('The website is under preparation. Stay tuned!')}</h3>
      <div>
        {t('Open source address for front-end project')}:{' '}
        <a className="text-[blue]" href="https://github.com/Aiden-FE/safe-password" target="_blank">
          点击前往
        </a>
      </div>
    </div>
  );
}

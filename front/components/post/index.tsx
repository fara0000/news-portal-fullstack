import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './post.module.scss';
import { Paper, Typography } from '@material-ui/core';

export const Post: FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test-123">
                    <a>
                        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
                        «гигантском пушистом захватчике»
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
                апокалиптические сюжеты с котом в главной роли.
            </Typography>
            <Image
                src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
                width={600}
                height={500}
            />
        </Paper>
    );
};

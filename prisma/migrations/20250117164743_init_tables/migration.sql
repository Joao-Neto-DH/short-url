-- CreateTable
CREATE TABLE `link` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `palavra_chave` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `expiracao` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `link_palavra_chave_key`(`palavra_chave`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contar_acesso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desktop` INTEGER NOT NULL DEFAULT 0,
    `mobile` INTEGER NOT NULL DEFAULT 0,
    `linkId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `contar_acesso_linkId_key`(`linkId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contar_acesso` ADD CONSTRAINT `contar_acesso_linkId_fkey` FOREIGN KEY (`linkId`) REFERENCES `link`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE `contar_acesso` DROP FOREIGN KEY `contar_acesso_linkId_fkey`;

-- AddForeignKey
ALTER TABLE `contar_acesso` ADD CONSTRAINT `contar_acesso_linkId_fkey` FOREIGN KEY (`linkId`) REFERENCES `link`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

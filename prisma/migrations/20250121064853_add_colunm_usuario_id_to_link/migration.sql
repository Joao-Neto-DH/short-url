-- AlterTable
ALTER TABLE `link` ADD COLUMN `usuarioId` INTEGER NOT NULL DEFAULT 52;

-- AddForeignKey
ALTER TABLE `link` ADD CONSTRAINT `link_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

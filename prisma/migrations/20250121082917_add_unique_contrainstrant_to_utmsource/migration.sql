/*
  Warnings:

  - A unique constraint covering the columns `[linkId]` on the table `utm_source` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `utm_source_linkId_key` ON `utm_source`(`linkId`);

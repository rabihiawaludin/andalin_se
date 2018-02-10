-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.20-0ubuntu0.16.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for db_kuliah
CREATE DATABASE IF NOT EXISTS `db_kuliah` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_kuliah`;

-- Dumping structure for table db_kuliah.t_mahasiswa
CREATE TABLE IF NOT EXISTS `t_mahasiswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nim` varchar(8) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `prodi` varchar(100) DEFAULT NULL,
  `kelas` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Dumping data for table db_kuliah.t_mahasiswa: ~2 rows (approximately)
/*!40000 ALTER TABLE `t_mahasiswa` DISABLE KEYS */;
INSERT INTO `t_mahasiswa` (`id`, `nim`, `nama`, `prodi`, `kelas`) VALUES
	(16, '1206582', 'Rabihi Awaludin', 'Ilmu Komputer', 'C2'),
	(17, '1200311', 'Tia Fauziyah', 'Ilmu Komputer', 'C2');
/*!40000 ALTER TABLE `t_mahasiswa` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

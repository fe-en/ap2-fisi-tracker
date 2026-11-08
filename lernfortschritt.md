# AP2 FISI Tracker, Lernfortschritt vom 07.11.2026

## Zusammenfassung

- Hauptthemen abgeschlossen: 3 von 13.
- Unterthemen erledigt: 65 von 84, 77.4 Prozent.
- Unterthemen offen: 19 von 84, 22.6 Prozent.
- Formatierung: `[x]` steht fuer erledigt, `[ ]` steht fuer offen.

---

## Konzeption & Administration

### 1.1, Systemanalyse & Infrastrukturplanung, 7 von 10 erledigt

- [x] Anforderungsmanagement: Lasten- vs. Pflichtenheft (Inhalte & Unterschiede)
- [x] Wirtschaftlichkeit: TCO, ROI, Amortisationsdauer, Nutzwertanalyse (Scoring)
- [x] Server-Hardware: CPU-Kerne, Virtualisierungstechniken (VT-x/AMD-V), NVMe vs. SAS
- [x] Virtualisierung: Hypervisor Typ 1 (ESXi, Hyper-V) & Typ 2 (VirtualBox), Container (Docker)
- [x] Cloud-Modelle: IaaS, PaaS, SaaS | Deployment: Public, Private, Hybrid, Multi-Cloud
- [x] Storage-Design: DAS, NAS, SAN (Fibre Channel, iSCSI), Objekt- vs. Block-Storage
- [x] RAID-Level: 0, 1, 5, 6, 10 (Kapazität, Sicherheit & Performance berechnen)
- [x] Hochverfügbarkeit: Clustering (Active/Passive), Lastverteilung, Redundante Netzteile
- [x] Stromversorgung: USV-Klassen (VFD/Offline, VI/Line-Interactive, VFI/Online-Doppelwandler)
- [x] Nachhaltigkeit: Green IT, PUE-Wert (Power Usage Effectiveness), ElektroG & Entsorgung

### 1.2, Administration & Systemmanagement, 8 von 9 erledigt

- [x] Verzeichnisdienste: Active Directory Struktur (Forest, Tree, Domain, OU, GPO)
- [x] Berechtigungskonzepte: AGDLP-Prinzip (Account, Global, Domain Local, Permission)
- [x] NTFS- vs. Freigabeberechtigungen (Effektive Rechte berechnen)
- [x] Identitätsschutz: SSO, MFA (TOTP, Hardware-Token), RADIUS, Kerberos-Ablauf
- [x] Update-Management: WSUS, SCCM/MECM, APT, Repositories, Staging-Umgebungen
- [x] Service-Management (ITIL): Service Desk, Incident, Problem, Change & Request Fulfillment
- [x] SLA (Service Level Agreement): Verfügbarkeit, Reaktionszeit, Wiederherstellungszeit
- [x] Lizenzrecht: OEM, Retail, Volumenlizenzen (MAK/KMS), CALs, Open Source (GPL, MIT)
- [x] MDM (Mobile Device Management) & BYOD-Sicherheitsrichtlinien

### 1.3, Datensicherung & Disaster Recovery, 6 von 6 erledigt

- [x] Backup-Strategien: 3-2-1 Regel, Generationenprinzip (Großvater-Vater-Sohn)
- [x] Sicherungstypen: Full, Incremental, Differential, Synthetic Full, Snapshots
- [x] Wiederherstellungsziele: RPO (Max. Datenverlust) & RTO (Max. Ausfallzeit)
- [x] Speichermedien: LTO-Tapes, Disk-to-Disk-to-Cloud (D2D2C), WORM-Medien
- [x] Revisionssicherheit: GoBD-Anforderungen, Archivierung vs. Backup
- [x] Desaster-Szenarien: Brandabschnitte, Offsite-Storage, Cloud-Recovery

### 1.4, Automatisierung & Logik, 5 von 7 erledigt

- [ ] Scripting: PowerShell, Bash & Python zur Automatisierung administrativer Tasks
- [ ] Reguläre Ausdrücke (Regex) zur Logfile-Analyse und Validierung
- [x] Versionsverwaltung: Git Workflow (Init, Clone, Commit, Branch, Merge, Push)
- [x] Algorithmen: Pseudocode, Aktivitätsdiagramm, Schreibtischtest (Trace-Tabelle)
- [x] Datenbanken: ER-Modell (Kardinalitäten), Normalisierung (1. bis 3. NF)
- [x] SQL (DQL/DML): Komplexe Joins, Subqueries, Aggregatfunktionen, Constraints
- [x] ACID-Prinzip: Atomicity, Consistency, Isolation, Durability in Transaktionen

---

## Netzwerktechnik & Infrastruktur

### 2.1, Protokolle & Schichtenmodelle, 9 von 9 erledigt

- [x] Schichtenmodelle: OSI (7 Schichten) vs. TCP/IP (4 Schichten) detailliert
- [x] Layer 2: Ethernet, MAC-Adressen, ARP-Cache, VLAN Tagging (IEEE 802.1Q)
- [x] Spanning Tree (STP): Loop-Vermeidung, Root-Bridge-Wahl, Redundanz
- [x] Layer 3: IPv4 Subnetting (VLSM, CIDR), IPv6 (Präfix, Interface-ID, Link-Local)
- [x] Routing: Statische Routen vs. Dynamische Protokolle (OSPF, BGP Basics)
- [x] Layer 4: TCP (3-Way-Handshake, Flow Control) vs. UDP
- [x] Layer 7: DNS (Rekursiv/Iterativ), DHCP (DORA), HTTP/S, SSL/TLS, SSH, SNMP
- [x] Adressumsetzung: NAT, PAT (Masquerading), Port-Forwarding
- [x] QoS (Quality of Service): Priorisierung von Voice/Video (DSCP/CoS)

### 2.2, Netzwerk-Design & Hardware, 6 von 6 erledigt

- [x] Topologien: Stern, Baum, Mesh, Spine-Leaf (Datacenter-Struktur)
- [x] Übertragungsmedien: Twisted Pair (Cat 6a/7), Glasfaser (SM/MM, SFP+ Module)
- [x] Hardware: Router, L2/L3-Switches, Access Points, WLAN-Controller
- [x] WLAN: Standards (WiFi 5/6/6E), Verschlüsselung (WPA2/WPA3-Enterprise/PSK)
- [x] WAN & VPN: IPsec (Phase 1/2), SSL-VPN, Site-to-Site vs. Remote Access
- [x] Anbindungen: FTTH (GPON/AON), MPLS, SD-WAN Grundlagen

### 2.3, Security & Monitoring, 3 von 6 erledigt

- [x] Sicherheit: Stateful Inspection Firewall, NGFW, WAF, Proxy (Forward/Reverse)
- [x] Angriffsformen: DoS/DDoS, Spoofing, MITM, Ransomware, Social Engineering
- [x] Abwehrmechanismen: IDS/IPS, SIEM, DMZ-Konzepte (Einstufig vs. Zweistufig)
- [x] Netzwerk-Monitoring: SNMP (Traps/Polling), Syslog, Flow-Daten (Netflow)
- [x] Tools & Diagnose: Wireshark (Paketanalyse), Nmap, Tracert, Pathping, Dig
- [x] Dokumentation: Netzwerkpläne, IP-Adressmanagement (IPAM), Inventarisierung

---

## Beraten & Qualitätssicherung

### 3.1, Projektmanagement & Beratung, 5 von 6 erledigt

- [x] Methodik: Wasserfall, V-Modell, Agil (Scrum: Rollen, Artefakte, Events)
- [x] Netzplantechnik: FAZ, FEZ, SAZ, SEZ berechnen, Kritischer Weg finden
- [x] Pufferzeiten: Gesamtpuffer (GP) & Freier Puffer (FP) berechnen
- [x] Projektstrukturplan (PSP): Arbeitspakete, Objektdarstellung vs. Ablauforganisation
- [x] Präsentation: Visualisierung, Medieneinsatz, Umgang mit Lampenfieber
- [ ] Kundenberatung: Bedarfsanalyse, Angebotserstellung, Einweisungen

### 3.2, Qualität & IT-Sicherheit (Methodik), 5 von 7 erledigt

- [x] Qualitätsmanagement: PDCA (Plan-Do-Check-Act), KVP, ISO 9001 Ziele
- [x] Testverfahren: Unit-, Integration-, System-, Abnahmetest (UAT)
- [x] Testmethoden: Black-Box vs. White-Box, Grenzwertanalyse, Fehlerprotokoll
- [x] IT-Grundschutz (BSI): Methodik, Bausteine, Schutzbedarfsfeststellung
- [x] Risikoanalyse: Risikomatrix (Eintrittswahrscheinlichkeit vs. Schadenshöhe)
- [x] Kryptografie: Symmetrisch (AES) vs. Asymmetrisch (RSA), Hashing (SHA)
- [x] Digitale Signatur & Zertifikate (Zweck & Ablauf)

---

## Wirtschafts- und Sozialkunde

### 4.1, Arbeits- & Tarifrecht, 3 von 5 erledigt

- [x] Berufsausbildungsvertrag: Inhalte, Probezeit, Kündigung
- [ ] BBiG, JArbSchG, ArbZG, MuSchG, KSchG
- [x] Tarifautonomie, Streik & Aussperrung
- [x] Betriebsverfassungsgesetz: Mitbestimmung des Betriebsrats
- [ ] Sozialversicherungen: KV, PV, RV, AV, UV (Beiträge/Träger)

### 4.2, Der Betrieb & Markt, 3 von 5 erledigt

- [x] Rechtsformen: GmbH, AG, GmbH & Co. KG, Einzelunternehmen (Haftung/Kapital)
- [ ] Marktformen: Monopol, Oligopol, Polypol
- [x] Ziele: Ökonomisch, Ökologisch, Sozial (Zielharmonie/-konflikt)
- [ ] Marketing-Mix (4Ps): Product, Price, Place, Promotion
- [x] Wettbewerbsrecht (UWG)

### 4.3, Finanzierung & Buchführung, 2 von 4 erledigt

- [ ] Entgeltabrechnung: Brutto-Netto-Berechnung
- [x] Finanzierung: Innen- vs. Außenfinanzierung (Kredit, Leasing)
- [x] Kosten-Leistungsrechnung: Fixe vs. Variable Kosten, Break-Even-Point
- [ ] Umsatzsteuer: Vorsteuer vs. Mehrwertsteuer

### 4.4, Nachhaltigkeit & Gesellschaft, 3 von 4 erledigt

- [x] Umweltschutz: ElektroG, Abfallvermeidung, Ressourcenmanagement
- [x] Globalisierung & Strukturwandel
- [x] Berufliche Fortbildung & Lebensbegleitendes Lernen
- [x] Diversity & Ethische Aspekte in der IT

---

# Anki-Lernstatistiken

| Thema | Sessions | Gesamt | Korrekt | Quote |
|---|---|---|---|---|
| 1.1, Systemanalyse & Infrastrukturplanung | 8 | 411 | 244 | 59 Prozent |
| 1.2, Administration & Systemmanagement | 5 | 437 | 251 | 57 Prozent |
| 1.3, Datensicherung & Disaster Recovery | 4 | 210 | 121 | 58 Prozent |
| 1.4, Automatisierung & Logik | 6 | 240 | 149 | 62 Prozent |
| 2.1, Protokolle & Schichtenmodelle | 11 | 514 | 299 | 58 Prozent |
| 2.2, Netzwerk-Design & Hardware | 5 | 336 | 218 | 65 Prozent |
| 2.3, Security & Monitoring | 6 | 215 | 132 | 61 Prozent |
| 3.1, Projektmanagement & Beratung | 1 | 111 | 64 | 58 Prozent |
| 3.2, Qualität & IT-Sicherheit (Methodik) | 3 | 284 | 155 | 55 Prozent |
| 4.1, Arbeits- & Tarifrecht | 3 | 228 | 150 | 66 Prozent |
| 4.2, Der Betrieb & Markt | 1 | 101 | 54 | 53 Prozent |
| 4.3, Finanzierung & Buchführung | 3 | 158 | 82 | 52 Prozent |
| 4.4, Nachhaltigkeit & Gesellschaft | 2 | 77 | 48 | 62 Prozent |


Wiederholen SQL, NAS, DAS, Umrechnung
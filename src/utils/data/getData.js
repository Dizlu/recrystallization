const data = [
  {time: '0', ro: '1', sigma: '3.91.E+01'},
  {time: '0.001', ro: '86304155065', sigma: '1.15.E+07'},
  {time: '0.002', ro: '171799767805', sigma: '1.62.E+07'},
  {time: '0.003', ro: '256494413066', sigma: '1.98.E+07'},
  {time: '0.004', ro: '340395594730', sigma: '2.28.E+07'},
  {time: '0.005', ro: '423510746377', sigma: '2.54.E+07'},
  {time: '0.006', ro: '505847231947', sigma: '2.78.E+07'},
  {time: '0.007', ro: '587412346388', sigma: '2.99.E+07'},
  {time: '0.008', ro: '668213316309', sigma: '3.19.E+07'},
  {time: '0.009', ro: '748257300614', sigma: '3.38.E+07'},
  {time: '0.01', ro: '827551391138', sigma: '3.55.E+07'},
  {time: '0.011', ro: '906102613277', sigma: '3.72.E+07'},
  {time: '0.012', ro: '983917926609', sigma: '3.87.E+07'},
  {time: '0.013', ro: '1061004225513', sigma: '4.02.E+07'},
  {time: '0.014', ro: '1137368339775', sigma: '4.17.E+07'},
  {time: '0.015', ro: '1213017035198', sigma: '4.30.E+07'},
  {time: '0.016', ro: '1287957014199', sigma: '4.43.E+07'},
  {time: '0.017', ro: '1362194916401', sigma: '4.56.E+07'},
  {time: '0.018', ro: '1435737319228', sigma: '4.68.E+07'},
  {time: '0.019', ro: '1508590738479', sigma: '4.80.E+07'},
  {time: '0.02', ro: '1580761628912', sigma: '4.91.E+07'},
  {time: '0.021', ro: '1652256384813', sigma: '5.02.E+07'},
  {time: '0.022', ro: '1723081340563', sigma: '5.13.E+07'},
  {time: '0.023', ro: '1793242771198', sigma: '5.23.E+07'},
  {time: '0.024', ro: '1862746892969', sigma: '5.33.E+07'},
  {time: '0.025', ro: '1931599863887', sigma: '5.43.E+07'},
  {time: '0.026', ro: '1999807784272', sigma: '5.52.E+07'},
  {time: '0.027', ro: '2067376697295', sigma: '5.62.E+07'},
  {time: '0.028', ro: '2134312589510', sigma: '5.71.E+07'},
  {time: '0.029', ro: '2200621391386', sigma: '5.79.E+07'},
  {time: '0.03', ro: '2266308977832', sigma: '5.88.E+07'},
  {time: '0.031', ro: '2331381168717', sigma: '5.96.E+07'},
  {time: '0.032', ro: '2395843729390', sigma: '6.05.E+07'},
  {time: '0.033', ro: '2459702371182', sigma: '6.13.E+07'},
  {time: '0.034', ro: '2522962751922', sigma: '6.20.E+07'},
  {time: '0.035', ro: '2585630476431', sigma: '6.28.E+07'},
  {time: '0.036', ro: '2647711097021', sigma: '6.36.E+07'},
  {time: '0.037', ro: '2709210113987', sigma: '6.43.E+07'},
  {time: '0.038', ro: '2770132976097', sigma: '6.50.E+07'},
  {time: '0.039', ro: '2830485081069', sigma: '6.57.E+07'},
  {time: '0.04', ro: '2890271776053', sigma: '6.64.E+07'},
  {time: '0.041', ro: '2949498358105', sigma: '6.71.E+07'},
  {time: '0.042', ro: '3008170074655', sigma: '6.78.E+07'},
  {time: '0.043', ro: '3066292123973', sigma: '6.84.E+07'},
  {time: '0.044', ro: '3123869655627', sigma: '6.90.E+07'},
  {time: '0.045', ro: '3180907770944', sigma: '6.97.E+07'},
  {time: '0.046', ro: '3237411523456', sigma: '7.03.E+07'},
  {time: '0.047', ro: '3293385919353', sigma: '7.09.E+07'},
  {time: '0.048', ro: '3348835917923', sigma: '7.15.E+07'},
  {time: '0.049', ro: '3403766431995', sigma: '7.21.E+07'},
  {time: '0.05', ro: '3458182328369', sigma: '7.26.E+07'},
  {time: '0.051', ro: '3512088428254', sigma: '7.32.E+07'},
  {time: '0.052', ro: '3565489507688', sigma: '7.38.E+07'},
  {time: '0.053', ro: '3618390297965', sigma: '7.43.E+07'},
  {time: '0.054', ro: '3670795486057', sigma: '7.48.E+07'},
  {time: '0.055', ro: '3722709715022', sigma: '7.54.E+07'},
  {time: '0.056', ro: '3774137584421', sigma: '7.59.E+07'},
  {time: '0.057', ro: '3825083650725', sigma: '7.64.E+07'},
  {time: '0.058', ro: '3875552427716', sigma: '7.69.E+07'},
  {time: '0.059', ro: '3925548386889', sigma: '7.74.E+07'},
  {time: '0.06', ro: '3975075957848', sigma: '7.79.E+07'},
  {time: '0.061', ro: '4024139528699', sigma: '7.84.E+07'},
  {time: '0.062', ro: '4072743446436', sigma: '7.88.E+07'},
  {time: '0.063', ro: '4120892017328', sigma: '7.93.E+07'},
  {time: '0.064', ro: '4168589507304', sigma: '7.98.E+07'},
  {time: '0.065', ro: '4215840142323', sigma: '8.02.E+07'},
  {time: '0.066', ro: '4262648108757', sigma: '8.07.E+07'},
  {time: '0.067', ro: '4309017553755', sigma: '8.11.E+07'},
  {time: '0.068', ro: '4354952585615', sigma: '8.15.E+07'},
  {time: '0.069', ro: '4400457274146', sigma: '8.19.E+07'},
  {time: '0.07', ro: '4445535651028', sigma: '8.24.E+07'},
  {time: '0.071', ro: '4490191710171', sigma: '8.28.E+07'},
  {time: '0.072', ro: '4534429408067', sigma: '8.32.E+07'},
  {time: '0.073', ro: '4578252664144', sigma: '8.36.E+07'},
  {time: '0.074', ro: '4621665361108', sigma: '8.40.E+07'},
  {time: '0.075', ro: '4664671345292', sigma: '8.44.E+07'},
  {time: '0.076', ro: '4707274426992', sigma: '8.48.E+07'},
  {time: '0.077', ro: '4749478380808', sigma: '8.51.E+07'},
  {time: '0.078', ro: '4791286945980', sigma: '8.55.E+07'},
  {time: '0.079', ro: '4832703826714', sigma: '8.59.E+07'},
  {time: '0.08', ro: '4873732692514', sigma: '8.62.E+07'},
  {time: '0.081', ro: '4914377178507', sigma: '8.66.E+07'},
  {time: '0.082', ro: '4954640885762', sigma: '8.70.E+07'},
  {time: '0.083', ro: '4994527381614', sigma: '8.73.E+07'},
  {time: '0.084', ro: '5034040199975', sigma: '8.76.E+07'},
  {time: '0.085', ro: '5073182841652', sigma: '8.80.E+07'},
  {time: '0.086', ro: '5111958774653', sigma: '8.83.E+07'},
  {time: '0.087', ro: '5150371434494', sigma: '8.87.E+07'},
  {time: '0.088', ro: '5188424224510', sigma: '8.90.E+07'},
  {time: '0.089', ro: '5226120516148', sigma: '8.93.E+07'},
  {time: '0.09', ro: '5263463649270', sigma: '8.96.E+07'},
  {time: '0.091', ro: '5300456932451', sigma: '8.99.E+07'},
  {time: '0.092', ro: '5337103643266', sigma: '9.02.E+07'},
  {time: '0.093', ro: '5373407028586', sigma: '9.06.E+07'},
  {time: '0.094', ro: '5409370304863', sigma: '9.09.E+07'},
  {time: '0.095', ro: '5444996658417', sigma: '9.12.E+07'},
  {time: '0.096', ro: '5480289245715', sigma: '9.14.E+07'},
  {time: '0.097', ro: '5515251193653', sigma: '9.17.E+07'},
  {time: '0.098', ro: '5549885599833', sigma: '9.20.E+07'},
  {time: '0.099', ro: '5584195532838', sigma: '9.23.E+07'},
  {time: '0.1', ro: '5618184032500', sigma: '9.26.E+07'},
  {time: '0.101', ro: '5651854110176', sigma: '9.29.E+07'},
  {time: '0.102', ro: '5685208749008', sigma: '9.31.E+07'},
  {time: '0.103', ro: '5718250904193', sigma: '9.34.E+07'},
  {time: '0.104', ro: '5750983503239', sigma: '9.37.E+07'},
  {time: '0.105', ro: '5783409446230', sigma: '9.39.E+07'},
  {time: '0.106', ro: '5815531606080', sigma: '9.42.E+07'},
  {time: '0.107', ro: '5847352828788', sigma: '9.45.E+07'},
  {time: '0.108', ro: '5878875933689', sigma: '9.47.E+07'},
  {time: '0.109', ro: '5910103713708', sigma: '9.50.E+07'},
  {time: '0.11', ro: '5941038935601', sigma: '9.52.E+07'},
  {time: '0.111', ro: '5971684340205', sigma: '9.55.E+07'},
  {time: '0.112', ro: '6002042642680', sigma: '9.57.E+07'},
  {time: '0.113', ro: '6032116532748', sigma: '9.59.E+07'},
  {time: '0.114', ro: '6061908674934', sigma: '9.62.E+07'},
  {time: '0.115', ro: '6091421708797', sigma: '9.64.E+07'},
  {time: '0.116', ro: '6120658249171', sigma: '9.66.E+07'},
  {time: '0.117', ro: '6149620886391', sigma: '9.69.E+07'},
  {time: '0.118', ro: '6178312186523', sigma: '9.71.E+07'},
  {time: '0.119', ro: '6206734691597', sigma: '9.73.E+07'},
  {time: '0.12', ro: '6234890919822', sigma: '9.75.E+07'},
  {time: '0.121', ro: '6262783365821', sigma: '9.78.E+07'},
  {time: '0.122', ro: '6290414500843', sigma: '9.80.E+07'},
  {time: '0.123', ro: '6317786772984', sigma: '9.82.E+07'},
  {time: '0.124', ro: '6344902607408', sigma: '9.84.E+07'},
  {time: '0.125', ro: '6371764406557', sigma: '9.86.E+07'},
  {time: '0.126', ro: '6398374550365', sigma: '9.88.E+07'},
  {time: '0.127', ro: '6424735396471', sigma: '9.90.E+07'},
  {time: '0.128', ro: '6450849280426', sigma: '9.92.E+07'},
  {time: '0.129', ro: '6476718515900', sigma: '9.94.E+07'},
  {time: '0.13', ro: '6502345394888', sigma: '9.96.E+07'},
  {time: '0.131', ro: '6527732187911', sigma: '9.98.E+07'},
  {time: '0.132', ro: '6552881144221', sigma: '1.00.E+08'},
  {time: '0.133', ro: '6577794491995', sigma: '1.00.E+08'},
  {time: '0.134', ro: '6602474438536', sigma: '1.00.E+08'},
  {time: '0.135', ro: '6626923170471', sigma: '1.01.E+08'},
  {time: '0.136', ro: '6651142853936', sigma: '1.01.E+08'},
  {time: '0.137', ro: '6675135634779', sigma: '1.01.E+08'},
  {time: '0.138', ro: '6698903638741', sigma: '1.01.E+08'},
  {time: '0.139', ro: '6722448971648', sigma: '1.01.E+08'},
  {time: '0.14', ro: '6745773719601', sigma: '1.01.E+08'},
  {time: '0.141', ro: '6768879949152', sigma: '1.02.E+08'},
  {time: '0.142', ro: '6791769707498', sigma: '1.02.E+08'},
  {time: '0.143', ro: '6814445022652', sigma: '1.02.E+08'},
  {time: '0.144', ro: '6836907903631', sigma: '1.02.E+08'},
  {time: '0.145', ro: '6859160340629', sigma: '1.02.E+08'},
  {time: '0.146', ro: '6881204305194', sigma: '1.02.E+08'},
  {time: '0.147', ro: '6903041750405', sigma: '1.03.E+08'},
  {time: '0.148', ro: '6924674611043', sigma: '1.03.E+08'},
  {time: '0.149', ro: '6946104803763', sigma: '1.03.E+08'},
  {time: '0.15', ro: '6967334227264', sigma: '1.03.E+08'},
  {time: '0.151', ro: '6988364762457', sigma: '1.03.E+08'},
  {time: '0.152', ro: '7009198272630', sigma: '1.03.E+08'},
  {time: '0.153', ro: '7029836603617', sigma: '1.04.E+08'},
  {time: '0.154', ro: '7050281583958', sigma: '1.04.E+08'},
  {time: '0.155', ro: '7070535025063', sigma: '1.04.E+08'},
  {time: '0.156', ro: '7090598721372', sigma: '1.04.E+08'},
  {time: '0.157', ro: '7110474450512', sigma: '1.04.E+08'},
  {time: '0.158', ro: '7130163973459', sigma: '1.04.E+08'},
  {time: '0.159', ro: '7149669034688', sigma: '1.04.E+08'},
  {time: '0.16', ro: '7168991362333', sigma: '1.05.E+08'},
  {time: '0.161', ro: '7188132668338', sigma: '1.05.E+08'},
  {time: '0.162', ro: '7207094648608', sigma: '1.05.E+08'},
  {time: '0.163', ro: '7225878983160', sigma: '1.05.E+08'},
  {time: '0.164', ro: '7244487336272', sigma: '1.05.E+08'},
  {time: '0.165', ro: '7262921356629', sigma: '1.05.E+08'},
  {time: '0.166', ro: '7281182677471', sigma: '1.05.E+08'},
  {time: '0.167', ro: '7299272916739', sigma: '1.06.E+08'},
  {time: '0.168', ro: '7317193677212', sigma: '1.06.E+08'},
  {time: '0.169', ro: '7334946546657', sigma: '1.06.E+08'},
  {time: '0.17', ro: '7352533097965', sigma: '1.06.E+08'},
  {time: '0.171', ro: '7369954889291', sigma: '1.06.E+08'},
  {time: '0.172', ro: '7387213464191', sigma: '1.06.E+08'},
  {time: '0.173', ro: '7404310351763', sigma: '1.06.E+08'},
  {time: '0.174', ro: '7421247066778', sigma: '1.06.E+08'},
  {time: '0.175', ro: '7438025109815', sigma: '1.07.E+08'},
  {time: '0.176', ro: '7454645967397', sigma: '1.07.E+08'},
  {time: '0.177', ro: '7471111112119', sigma: '1.07.E+08'},
  {time: '0.178', ro: '7487422002780', sigma: '1.07.E+08'},
  {time: '0.179', ro: '7503580084513', sigma: '1.07.E+08'},
  {time: '0.18', ro: '7519586788911', sigma: '1.07.E+08'},
  {time: '0.181', ro: '7535443534157', sigma: '1.07.E+08'},
  {time: '0.182', ro: '7551151725145', sigma: '1.07.E+08'},
  {time: '0.183', ro: '7566712753609', sigma: '1.07.E+08'},
  {time: '0.184', ro: '7582127998245', sigma: '1.08.E+08'},
  {time: '0.185', ro: '7597398824832', sigma: '1.08.E+08'},
  {time: '0.186', ro: '7612526586353', sigma: '1.08.E+08'},
  {time: '0.187', ro: '7627512623116', sigma: '1.08.E+08'},
  {time: '0.188', ro: '7642358262873', sigma: '1.08.E+08'},
  {time: '0.189', ro: '7657064820936', sigma: '1.08.E+08'},
  {time: '0.19', ro: '7671633600296', sigma: '1.08.E+08'},
  {time: '0.191', ro: '7686065891733', sigma: '1.08.E+08'},
  {time: '0.192', ro: '7700362973940', sigma: '1.08.E+08'},
  {time: '0.193', ro: '7714526113625', sigma: '1.09.E+08'},
  {time: '0.194', ro: '7728556565634', sigma: '1.09.E+08'},
  {time: '0.195', ro: '7742455573052', sigma: '1.09.E+08'},
  {time: '0.196', ro: '7756224367322', sigma: '1.09.E+08'},
  {time: '0.197', ro: '7769864168347', sigma: '1.09.E+08'},
  {time: '0.198', ro: '7783376184605', sigma: '1.09.E+08'},
  {time: '0.199', ro: '7796761613250', sigma: '1.09.E+08'},
  {time: '0.2', ro: '7810021640219', sigma: '1.09.E+08'},
]

export default () => data
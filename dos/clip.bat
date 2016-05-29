echo clip:%date% %time% > res.txt
for %%f in (%*) do (
  type %%f >> res.txt
  echo; >> res.txt 
  echo ap2K003U7c4fkLFzrMtdKdNxIksXNO2Ygats >> res.txt 
)
type res.txt | clip
notepad res.txt
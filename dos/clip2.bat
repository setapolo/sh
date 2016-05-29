echo clip:%date% %time% > res.txt
for %%f in (%*) do (
  echo %%f >> res.txt
)
type res.txt | clip
notepad res.txt
## Nvidia drivers

check current version 
```
cat /sys/module/nvidia/version
```
or
```
cat /proc/driver/nvidia/version
```

get graphic card infos
```
lspci|grep VGA
```

### tear screen

you can create a file called /etc/X11/xorg.conf.d/20-nvidia.conf

And add these lines

```
Section "Device"
        Identifier "Nvidia Card"
        Driver     "nvidia"
        VendorName "NVIDIA Corporation"
        BoardName  "GeForce GTX 750 Ti"
EndSection

Section "Screen"
    Identifier     "Screen0"
    Device         "Device0"
    Monitor        "Monitor0"
    Option         "metamodes" "nvidia-auto-select +0+0 {ForceFullCompositionPipeline=On}"
    Option         "AllowIndirectGLXProtocol" "off"
    Option         "TripleBuffer" "on"
EndSection
```


<!DOCTYPE html>
<html>
<head>
  <title>sNAT</title>
</head>
<body>
  <a href="/">back</a>
  <article style="padding-left: 20px">
    <h3>sNAT</h3>
    <div>
      <h5>目录</h5>
      <ul>
        <li>打开网卡转发</li>
        <li>开启NAT表的原地址替换</li>
        <li>确认路由表和DNS</li>
      </ul>
    </div>
    <div>
      <h5>开启转发</h5>
      <p>确保<span>/proc/sys/net/ipv4/ip_forward</span>的值为1</p>
    </div>
    <div>
      <h5>开启sNAT</h5>
      <p>用<span>iptables -t nat -nL</span>命令查看NAT表</p>
      <p>用<span>iptables -t nat -A POSTROUTING -s xxx.xxx.xxx.xxx/n -j MASQUERADE</span></p>
      <p>在POSTROUTING链上添加原地址替换，MASQUERADE意味使用目标网络的IP地址，如要指定可以用 SNAT --to-source=xxx.xxx.xxx.xxx</p>
      <p>只需要设置nat表，filter默认皆为ACCEPT不用动</p>
      <p>用<span>iptables -t 表名 -F</span>可以清除指定表所有规则</p>
    </div>
    <div>
      <h5>确认路由表</h5>
      <p>用<span>route</span>命令（bsd下为<span>netstat -r</span>）查看路由表</p>
      <p>route del xxx.xxx.xxx.xxx 可以删除一条路由</p>
      <p>route add -net xxx.xxx.xxx.xxx/n [gw Gw] 这样可以增加一条路由信息</p>
    </div>
    <div>
      <h5>⚠️注意</h5>
      <p>如果还是不能访问外网，优先检查能否通过IP访问NAT网关同网段主机</p>
      <p>检查NAT网段主机的DNS设置是否正确，可以试试NAT网关机器的网关的地址，或者用公网DNS服务器</p>
    </div>
    <div>
      <h5>原理</h5>
      <p>// @TODO 以后再写</p>
    </div>
  </article>
</body>
</html>

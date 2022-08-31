# 設定系
## フォルダ名を英語に変更する
```sh
LANG=C xdg-user-dirs-gtk-update
```

## アニメーションの無効化
```sh
gsettings set org.gnome.desktop.interface enable-animations false
```

## ファイアウォール
```sh
sudo ufw enable
sudo ufw default allow #テストのため普段はdenney
```



# apt / インストール系
```sh
sudo apt update
sudo apt upgrade
sudo apt full-upgrade
sudo apt autoremove
sudo apt clean
sudo apt autoclean
```

## vim 再インスコ (したほうがええの？)
```sh
sudo apt remove --purge vim*
sudo apt autoremove
sudo apt install vim
```
## tmux
```sh
sudo apt install tmux
```

## SSH
```sh
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
```


## Apache
```sh
sudo apt install apache2
```

## PHP (先にApache入れておけば自動で設定されるはず)
```sh
sudo apt install php
```

## MySQL
```sh
sudo apt install mysql-server mysql-client
```
### Rootユーザーの設定
```sh
sudo mysql_secure_installation
```
| 質問 | 答え |
| ---- | ---- |
| Press y\|Y for Yes, any other key for No: | y |
| Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 2 | 後述※１ |
| Do you wish to continue with the password provided?(Press y\|Y for Yes, any other key for No) : | y |
| Remove anonymous users? (Press y\|Y for Yes, any other key for No) : | y |
| Disallow root login remotely? (Press y\|Y for Yes, any other key for No) : | y |
| Remove test database and access to it? (Press y\|Y for Yes, any other key for No) : | y |

※１
パスワードの強度についてです。0が一番弱く、2が強いです。
パスワードマネージャー等で強固なパスワードを管理できる方は2で大丈夫ですが、自信のない方は0にしましょう(とはいっても、2にするのが推奨です)

### テスト用ユーザーの作成
```sh
sudo mysql -u root
```
```sh
# ユーザー作成
mysql> CREATE USER 'ユーザー名'@'localhost' IDENTIFIED BY 'パスワード';

# 権限付与
mysql> GRANT all on *.* to 'ユーザー名'@'localhost';

# テスト用テーブルの作成
mysql> create database test;
       use test;
       create table students(id int,name varchar(20));
       insert into students (id,name) values (1,'Taro'),(2,'Hanako');
```
### PHPの環境
```sh
sudo apt install php7.4-mysql
sudo systemctl restart apache2
```
## Node.js
```sh
# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc

# nodejs
nvm list-remote
nvm install X.X.X
node -v
npm -v
```
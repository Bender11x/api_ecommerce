import { AppDataSource } from "../database/data-source";
import { Usuarios } from "../entities/Usuario";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repo = AppDataSource.getRepository(Usuarios);

const JWT_SECRET = 'sua_chave_secreta'; 
export const AuthService = {

    async auth(email: string, password: string) {

        const user = await repo.findOneBy({ email });

        if (user) {
            const passwordCompare = await bcrypt.compare(password, user.password);
            
            if (passwordCompare) {
                // Criação do token JWT
                const token = jwt.sign(
                    {
                        id: user.id,
                        email: user.email,
                        nome: user.nome 
                    },
                    JWT_SECRET,
                    {
                        expiresIn: '1h' 
                    }
                );

                return {
                    token,
                    user: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email
                    }
                };
            }
        }

        return null;
    }
};

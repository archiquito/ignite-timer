import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>
           <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Task 1</td>
                        <td>2023-10-01 12:00</td>
                        <td>30 min</td>
                        <td>
                        <Status statusColor="green">Concluído</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Task 2</td>
                        <td>2023-10-02 14:00</td>
                        <td>45 min</td>
                        <td>
                        <Status statusColor="yellow">Em andamento</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Task 2</td>
                        <td>2023-10-02 14:00</td>
                        <td>45 min</td>
                        <td>
                        <Status statusColor="red">Concluído</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
           </HistoryList>
        </HistoryContainer>
    );
}